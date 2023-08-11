import Item from "./Item";
import spencerPhoto from "./pictures/spencer.webp";
import jayDPhoto from "./pictures/jayD.jpg";
import nibblePhoto from "./pictures/nibble.jpg";

const ItemList = (p) => {
  return (
    <ul className="container">
      {p.renderedItems.map((item) => {
        const foundItem = p.items.find((i) => i.id === item.id);
        const photo = foundItem ? foundItem.photo : "";

        let itemClassName = "";

        if (item.color === 0) {
          itemClassName = "blue";
        } else if (item.color === 1) {
          itemClassName = "green";
        } else if (item.color === 2) {
          itemClassName = "red";
        }

        return (
          <Item
            item={item}
            key={item.id}
            itemClassName={itemClassName}
            photo={photo}></Item>
        );
      })}
    </ul>
  );
};

export default ItemList;
