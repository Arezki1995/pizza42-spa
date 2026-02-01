import { useCart } from "../../context/CartContext";

const STATIC_IMAGES_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function MenuItem({ pizza }) {
    const { addToCart } = useCart();

    return (
        <div key={pizza.id} className="card menu-item">
            <div className="menu-item-img">
                <img src={STATIC_IMAGES_BASE_URL + pizza.image_path} alt={pizza.name} />
            </div>
            <div className="menu-item-details">
                <div className="menu-item-name">{pizza.name}</div>
                <div className="menu-item-description">{pizza.description}</div>
                <div className="menu-item-price">{pizza.price}€</div>
                <div className="menu-item-action">
                    <button onClick={()=> addToCart(pizza)}>Add</button>        
                </div>
            </div>
        </div>
    );

}