

const AddToCartButton = ({ item, onAddToCart }) => {
    return (
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => onAddToCart(item)}
      >
        Add to Cart
      </button>
    );
  };
  
  export default AddToCartButton;