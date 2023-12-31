import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { add, remove } from "../redux/Slices/CartsSlice.js";

const Product = ({ post }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from cart");
  };

  const { cart } = useSelector((state) => state);

  return (
    <div
      className="flex flex-col items-center justify-between
    md:hover:scale-110 transition duration-300 ease-in shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] gap-3 p-4 mt-10 ml-5 rounded-xl
    hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] group
    max-[600px]:mt-32
    "
    >
      <div>
        <p className="text-gray-700 font-semibold text-lg truncate w-40 mt-1">
          {post.title}
        </p>
      </div>

      <div>
        <p className="text-gray-400 w-40 font-normal text-[10px] text-left">
          {post.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>

      <div className="h-[180px]">
        <img
          src={`${post.image}`}
          alt="product-image"
          className="h-full w-full"
        />
      </div>

      <div className="flex gap-12 items-center w-full mt-5 justify-between">
        <div>
          <p className="text-green-600 font-semibold">${post.price}</p>
        </div>
        {cart.some((p) => p.id == post.id) ? (
          <button
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          group-hover:bg-gray-700
          group-hover:text-white transition duration-300 ease-in"
            onClick={removeFromCart}
          >
            Remove Item
          </button>
        ) : (
          <button
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          group-hover:bg-gray-700
          group-hover:text-white transition duration-300 ease-in"
            onClick={addToCart}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
