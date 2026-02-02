import Profile from "../components/profile/profile";
import OrdersHistory from "../components/orders/OrderHistory";

export default function ProfilePage() {
  return (
    <div className="profile-page">
      <Profile />
      <OrdersHistory />
    </div>
  );
}