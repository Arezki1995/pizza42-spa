

function formatDate(isoDate) {
    return new Date(isoDate).toLocaleString(undefined, {
        dateStyle: "medium",
        timeStyle: "short",
    });
}

export default function OrderHistoryItem({ order }) {

    return (
        <tr>
            <td className="order-id">#{order.id}</td>
            <td className="order-date">{formatDate(order.timestamp)}</td>
            <td className="order-content">
                {order.items.map((item, index) => (   
                    <div key={index} className="order-content">
                        <span>pizza_id:{item.pizza_id} x Qte:{item.quantity}</span>
                    </div>
                ))}
            </td>
        </tr>
    );
}
