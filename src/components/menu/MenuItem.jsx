const STATIC_IMAGES_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export default function MenuItem({ pizza }){
    return(
        <div key={pizza.id} className="menu-item">
          <img src={STATIC_IMAGES_BASE_URL + pizza.image_path} alt={pizza.name} style={{ width: "100px", height: "100px" }} />
          <div className="menu-item-name">{pizza.name}</div>
          <div className="menu-item-description">{pizza.description}</div>
          <div className="menu-item-price">{pizza.price}</div>
        </div>
    );

}