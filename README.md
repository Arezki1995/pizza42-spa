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

## Environment Variables

Environment variables are required to start the app (see `example.env`):

```env
VITE_AUTH0_DOMAIN=https://your-auth-domain.com
VITE_AUTH0_CLIENT_ID=your-client-id
VITE_AUTH0_AUDIENCE=your-audience
VITE_API_BASE_URL=your-api-base-url
VITE_CUSTOM_CLAIM_NAMESPACE=your-custom-claim-namespace
```

- **VITE_AUTH0_DOMAIN** - Auth0 tenant domain for authentication
- **VITE_AUTH0_CLIENT_ID** - Auth0 application client ID
- **VITE_AUTH0_AUDIENCE** - Auth0 API audience identifier
- **VITE_API_BASE_URL** - Backend API base URL
- **VITE_CUSTOM_CLAIM_NAMESPACE** - Custom namespace for Auth0 custom claims
