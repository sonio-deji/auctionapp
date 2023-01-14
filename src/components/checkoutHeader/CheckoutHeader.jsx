import { Link, useLocation } from "react-router-dom";
import "./checkoutHeader.scss";

const CheckoutHeader = () => {
  const location = useLocation();

  //convert pathname to capital letter
  const capitalize =
    location.pathname.charAt(1).toUpperCase() + location.pathname.slice(2);
  return (
    <div className="header">
      <div className="directory">
        <p>
          Home/Marketplace<span>/{capitalize}</span>{" "}
        </p>
      </div>
      <div className="container">
        <div
          style={{
            textDecoration: "none",
            color: location.pathname === "/cart" ? "black" : "#888",
            borderBottom:
              location.pathname === "/cart" ? "1px solid black" : "none",
            paddingBottom: "5px",
            fontWeight: location.pathname === "/cart" ? "500" : "400",
          }}
        >
          <span>Shopping Cart</span>
        </div>
        <div
          style={{
            textDecoration: "none",
            color: location.pathname === "/shippingdetails" ? "black" : "#888",
            borderBottom:
              location.pathname === "/shippingdetails"
                ? "1px solid black"
                : "none",
            paddingBottom: "5px",
            fontWeight:
              location.pathname === "/shippingdetails" ? "500" : "400",
          }}
        >
          <span>Shipping details</span>
        </div>
        <div
          style={{
            textDecoration: "none",
            color: location.pathname === "/paymentdetails" ? "black" : "#888",
            borderBottom:
              location.pathname === "/paymentdetails"
                ? "1px solid black"
                : "none",
            paddingBottom: "5px",
            fontWeight: location.pathname === "/paymentdetails" ? "500" : "400",
          }}
        >
          <span>Payment details</span>
        </div>
      </div>

      <hr />
    </div>
  );
};

export default CheckoutHeader;
