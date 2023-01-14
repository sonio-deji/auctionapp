import "./cart.scss";
import ShoppingCart from "../../components/shoppingCart/ShoppingCart";

const Cart = () => {
  return (
    <div className="cart">
      <div className="cartSection">
        <ShoppingCart />
      </div>
    </div>
  );
};

export default Cart;
