const Button = ({ addMoreItems }) => {
  return (
    <div className="button-container">
      <button onClick={addMoreItems} className="button show-more">
        Add more items
      </button>
    </div>
  );
};

export default Button;
