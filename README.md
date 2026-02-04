# Pizza42 - Single Page Application

A React + Vite pizza ordering application with authentication, menu browsing, cart management, and order history.

## Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite 7
- **Routing**: React Router v7
- **Authentication**: Auth0

## Project Structure

### Core Architecture
- **`src/app/`** - Application entry point
  - `App.jsx` - Root component
  - `Router.jsx` - Route configuration and protected routes

### Pages (`src/pages/`)
- `MenuPage` - Browse available pizzas
- `CartPage` - View and manage shopping cart
- `OrderPage` - Checkout (protected route)
- `ProfilePage` - User profile (protected route)

### Components (`src/components/`)
- **auth/** - Authentication UI (Login, Logout, Protected Routes)
- **layout/** - Page layout (MainLayout, NavBar, Banner, Footer, LogoBar)
- **menu/** - Menu display (Menu, MenuItem)
- **cart/** - Cart management (Cart, CartItem, CartItemAction)
- **orders/** - Order history (OrderHistory, OrderHistoryItem)
- **nav/** - Navigation utilities (Navigation, Message)

### State Management
- **`src/context/CartContext.jsx`** - Global cart state using useReducer with localStorage persistence

### Services (`src/services/`)
- `apiClient.js` - Base API fetch wrapper
- `menuApi.js` - Menu data API calls
- `orderApi.js` - Order management API calls

### Styling
- **`src/assets/css/`** - Global and component styles
