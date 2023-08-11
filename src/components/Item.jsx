const Item = ({ item, itemClassName, photo }) => {
  return (
    <li
      key={item.id}
      className={`item ${item.itemColor ? item.itemColor : itemClassName}`}>
      <div className="section-1">
        <img src={item.photo} alt="pic" />
      </div>
      <div className="section-2">
        <h2 className="item-name">{item.name}</h2>
        <div className="description">{item.description}</div>
        <div className="price-container">
          {item.newPrice ? (
            <>
              <h2>kn{item.price}</h2> <h3>kn{item.newPrice}</h3>
            </>
          ) : (
            <h2>kn{item.price}</h2>
          )}
        </div>
        <p className="discount">
          {(((item.price - item.newPrice) / item.price) * 100).toFixed(0)}%
          discount!
        </p>
      </div>

      <div className="section-3">
        <button className="button">
          <a href="">See more</a>
        </button>
      </div>
    </li>
  );
};

export default Item;
