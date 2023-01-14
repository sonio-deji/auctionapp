import CartItems from "../../components/cartItems/CartItems";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./shippingDetails.scss";

const ShippingDetails = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [postal, setPostal] = useState("");
  const [number, setNumber] = useState("");

  const navigate = useNavigate();
  const handleNavigate = (e) => {
    e.preventDefault();
    if ((email, name, postal, number === "")) {
      return;
    } else {
      navigate("/paymentdetails");
    }
  };
  return (
    <div className="shippingDetails">
      <div className="left">
        <form>
          <div className="email">
            <label>Your email</label>
            <input
              type="email"
              placeholder="anuuolanide@yahoo.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="checkbox">
              <input type="checkbox" name="" id="" />{" "}
              <span>Get updates about new drops & exclusive offers</span>
            </div>
          </div>
          <div className="name">
            <label>Your full name</label>
            <input
              type="text"
              placeholder="Anuoluwapo Bamisaye"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="chooseWallet">
            <label>Choose a wallet</label>
            <select name="" id="">
              <option value="">Metamask</option>
            </select>
          </div>
          <div className="city">
            <label>City</label>
            <select name="" id="">
              <option value="">Lagos</option>
            </select>
          </div>
          <div className="countryPostal">
            <div className="country">
              <label htmlFor="">Country</label>
              <select name="" id="">
                <option value="">Nigeria</option>
              </select>
            </div>
            <div className="postal">
              <label>Postal Code</label>
              <input
                type="text"
                placeholder="001001"
                onChange={(e) => setPostal(e.target.value)}
              />
            </div>
          </div>
          <div className="number">
            <label>Phone number</label>
            <input
              type="text"
              placeholder="0812345785"
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <button onClick={handleNavigate}>Proceed to payment</button>
          <Link
            className="link"
            to={"/cart"}
            style={{ color: "#006CA2", textAlign: "center" }}
          >
            Go back to cart
          </Link>
        </form>
      </div>
      <div className="right">
        <CartItems type={"shipping"} />
      </div>
    </div>
  );
};

export default ShippingDetails;
