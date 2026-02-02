
export default function OrderHistoryItem({ order }) {
    return (
        <div className="order-card">
            <div className="order-header">
                <strong>Order #{order.id}</strong>
                <span>  Total: {order.total_price} €</span>
            </div>

            <ul className="order-items">
                {order.items.map((item, index) => (
                    <li key={index}>
                        Pizza #{item.pizza_id} × {item.quantity}
                    </li>
                ))}
            </ul>
        </div>
    );
}
