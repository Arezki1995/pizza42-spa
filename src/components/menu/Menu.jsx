import MenuItem from "./MenuItem";

export default function Menu({ menu }){
  return (
    <div className="pizza-menu-list">
      {menu.map(pizza => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </div>

  );
};