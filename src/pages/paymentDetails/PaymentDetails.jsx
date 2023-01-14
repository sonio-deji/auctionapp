import "./paymentDetails.scss";
import HttpsIcon from "@mui/icons-material/Https";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const PaymentDetails = () => {
  const navigate = useNavigate();
  const [wallet, setWallet] = useState("");
  const [key, setKey] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleNavigate = () => {
    if ((wallet, key, expiryDate, cvv === "")) {
      return;
    } else {
      navigate("/confirmationpage");
    }
  };
  return (
    <div className="paymentDetails">
      <div className="top">
        <span className="payment">Payment method</span>
        <span className="secure">
          {" "}
          <HttpsIcon /> Secure server
        </span>
      </div>
      <div className="bottom">
        <div className="left">
          <div className="container">
            <div className="selectWallet">
              <input className="radio" type="radio" name="" id="" />
              <span>Select your wallet</span>
              <div className="walletContainer">
                <div className="wallet">
                  <img src="/src/assets/metamask.png" alt="" />
                </div>
                <div className="wallet">
                  <img src="/src/assets/coinbase.png" alt="" />
                </div>
                <div className="wallet">
                  <img src="/src/assets/walletconnect.png" alt="" />
                </div>
                <div className="wallet">
                  <img src="/src/assets/phantom.png" alt="" />
                </div>
              </div>
            </div>
            <div className="connect">
              <p>
                Connect with one of our available wallet providers or add and
                connect a new wallet
              </p>
              <div className="walletContainer">
                <div className="wallet">
                  <img src="/src/assets/metamask.png" alt="" />
                </div>
                <div className="wallet">
                  <img src="/src/assets/coinbase.png" alt="" />
                </div>
                <div className="wallet">
                  <img src="/src/assets/walletconnect.png" alt="" />
                </div>
                <div className="wallet">
                  <img src="/src/assets/phantom.png" alt="" />
                </div>
              </div>
            </div>
            <form>
              <label>
                <p>Wallet type</p>
                <input
                  type="text"
                  onChange={(e) => setWallet(e.target.value)}
                />
              </label>
              <label>
                <p>key</p>
                <div className="inputContainer">
                  <input
                    type="text"
                    placeholder="Please enter your key"
                    onChange={(e) => setKey(e.target.value)}
                  />
                  <img src="/src/assets/metamask.png" alt="" />
                </div>
              </label>
              <div className="expiryDate">
                <label>
                  <p>Expiry Date</p>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    onChange={(e) => setExpiryDate(e.target.value)}
                  />
                </label>
                <label>
                  <p>CVV</p>
                  <input
                    type="text"
                    placeholder="***"
                    onChange={(e) => setCvv(e.target.value)}
                  />
                </label>
              </div>
              <div className="saveCard">
                <input type="checkbox" name="" id="" />
                <span>
                  Save my wallet details & information for future transaction
                </span>
              </div>
            </form>
          </div>
          <button onClick={handleNavigate}>Confirm</button>
        </div>
        <div className="right">
          <p className="title">Payment Summary</p>
          <hr />
          <div className="wallet">
            <p className="walletAddress">Metamask wallet: 002345kji9opzzz3</p>
            <p className="location">Actively linked to Yaba, Lagos, Nigeria.</p>
          </div>
          <hr />
          <div className="arrivalDate">
            <p>
              Expected arrival date: Between 22nd september and 26th september
              2022
            </p>
          </div>
          <hr />
          <div className="cartDetails">
            <div className="detail">
              <p>Products in cart :</p>
              <span>6</span>
            </div>
            <div className="detail">
              <p>Shipping :</p>
              <span>$2.50</span>
            </div>
            <div className="detail">
              <p>Total :</p>
              <span>$114.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
