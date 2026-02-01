import { createContext, useContext, useReducer, useEffect, useMemo } from "react";

const CartContext = createContext(null);
const CART_STORAGE_KEY = "pizza42_cart";

/* ----------------------------- */
/* Utilities                     */
/* ----------------------------- */

function loadCartFromStorage() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.warn("Failed to load cart from storage", err);
    return [];
  }
}

/* ----------------------------- */
/* Reducer                       */
/* ----------------------------- */

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.find(item => item.id === action.payload.id);

      if (!existing) {
        return [...state, { ...action.payload, quantity: 1 }];
      }

      return state.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }

    case "INCREASE_QUANTITY":
      return state.map(item =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    case "DECREASE_QUANTITY":
      return state
        .map(item =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0);

    case "REMOVE_ITEM":
      return state.filter(item => item.id !== action.payload);

    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
}

/* ----------------------------- */
/* Provider                      */
/* ----------------------------- */

function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(
    cartReducer,
    [],
    loadCartFromStorage
  );

  /* Persist cart */
  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  /* ----------------------------- */
  /* Actions                       */
  /* ----------------------------- */

  const addToCart = (pizza) =>
    dispatch({ type: "ADD_ITEM", payload: pizza });

  const increaseQuantity = (pizzaId) =>
    dispatch({ type: "INCREASE_QUANTITY", payload: pizzaId });

  const decreaseQuantity = (pizzaId) =>
    dispatch({ type: "DECREASE_QUANTITY", payload: pizzaId });

  const removeFromCart = (pizzaId) =>
    dispatch({ type: "REMOVE_ITEM", payload: pizzaId });

  const clearCart = () =>
    dispatch({ type: "CLEAR_CART" });

  /* ----------------------------- */
  /* Derived state (selectors)     */
  /* ----------------------------- */

  const totalItems = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart]
  );

  const totalPrice = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart]
  );

  const isEmpty = cart.length === 0;

  return (
    <CartContext.Provider
      value={{
        cart,
        totalItems,
        totalPrice,
        isEmpty,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

/* ----------------------------- */
/* Hook                          */
/* ----------------------------- */

function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

export { CartProvider, useCart };