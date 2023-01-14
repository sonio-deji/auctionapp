import CartItems from "../cartItems/CartItems";
import "./shoppingCart.scss";

const ShoppingCart = () => {
  return (
    <div className="shoppingCart">
      <div className="shopping">
        <CartItems />
      </div>
    </div>
  );
};

export default ShoppingCart;
