import { useState } from "react";
import { Items } from "./items/items";
import "./style.css";
import { generateNewItems } from "./helper-methods/objectGenerator";
import Loader from "./components/Loader";
import ItemList from "./components/ItemList";
import Button from "./components/Button";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState(Items);
  const [renderedItems, setRenderedItems] = useState(items.slice(0, 3));

  const addMoreItems = () => {
    setIsLoading(true);

    setTimeout(() => {
      const newItems = generateNewItems(items);
      const newRenderedItems = newItems.slice(-3);

      setItems((prevItems) => [...prevItems, ...newRenderedItems]);
      setRenderedItems((prevRenderedItems) => [
        ...prevRenderedItems,
        ...newRenderedItems,
      ]);

      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      {isLoading && <Loader></Loader>}
      <div>
        <h2 className="main-h">Shop through our most popular robots!</h2>
        <ItemList
          isLoading={isLoading}
          renderedItems={renderedItems}
          items={items}></ItemList>
        <Button addMoreItems={addMoreItems}></Button>
      </div>
    </>
  );
};

export default App;
