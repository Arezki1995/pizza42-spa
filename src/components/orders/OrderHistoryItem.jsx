

function formatDate(isoDate) {
    return new Date(isoDate).toLocaleString(undefined, {
        dateStyle: "medium",
        timeStyle: "short",
    });
}

export default function OrderHistoryItem({ order }) {

    return (
        <div className="order-card">
            <div className="order-id">ID#{order.id}</div>
            <div className="order-date">
                {formatDate(order.timestamp)}
            </div>

            <ul className="order-content">
                {order.items.map((item, index) => (
                    <li key={index}>
                        <span>pizza_id:{item.pizza_id} x </span>
                        <span>Qte:{item.quantity}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
