
export default function Message({ title, text, children }) {

    return (
        <div className="card message-box">
            <div className="message-title">{title}</div>
            <div className="message-text">{text}</div>
            {children}
        </div>
    );
}