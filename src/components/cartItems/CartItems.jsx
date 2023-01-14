import "./cartItems.scss";
import { cartItems } from "../../tempData";
import { Link, useNavigate } from "react-router-dom";
import { CloseOutlined } from "@mui/icons-material";

const CartItems = ({ type }) => {
  const navigate = useNavigate();

  const handleNavigate = (e) => {
    e.preventDefault();
    if (cartItems.length < 1) {
      return;
    } else {
      navigate("/shippingdetails");
    }
  };
  return (
    <div className="cartItems">
      {cartItems.map((item) => (
        <div
          className="item"
          key={item.id}
          style={{ maxWidth: type === "shipping" ? "525px" : "" }}
        >
          <div className="left">
            <div
              className={
                type === "shipping" ? "shippingImgContainer" : "imgContainer"
              }
            >
              <img src={item.image} alt="" />
            </div>
            <div className="details">
              <p className="title">{item.title}</p>
              <p className="creator">{item.creator}</p>
              <p className="size">
                Size: <span>${item.size} ft</span>{" "}
              </p>
              <div className="amount">
                <button>-</button>
                <span>{item.amount}</span>
                <button>+</button>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="close">
              <CloseOutlined />
            </div>
            <div className="price">${item.price}</div>
          </div>
        </div>
      ))}
      <div className="checkoutSection">
        <div
          className="left"
          style={{ display: type === "shipping" ? "none" : "flex" }}
        >
          <button onClick={handleNavigate} className="checkout">
            Proceed to checkout
          </button>
          <Link
            style={{ color: "#006CA2", fontSize: "28px", fontWeight: "500" }}
            to={"/"}
          >
            Continue shopping
          </Link>
        </div>
        <div className="right">
          <div className="checkoutItems">
            <p className="totalItems">Products in cart: </p>
            <span>3 items</span>
          </div>
          <div className="checkoutItems">
            <p className="totalItems">Shipping: </p>
            <span>$2.50</span>
          </div>
          <div className="checkoutItems">
            <p className="totalItems">Total: </p>
            <span>$114.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
