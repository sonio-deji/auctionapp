import "./footer.scss";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { FmdGoodOutlined } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="logo">ARTSY.</div>
        <div className="navigation">
          <p>Home</p>
          <p>Marketplace</p>
          <p>Auctions</p>
          <p>Drops</p>
        </div>
        <div className="otherPages">
          <p>Blog</p>
          <p>Wallet</p>
          <p>Rates</p>
          <p>High bids</p>
        </div>
        <div className="contact">
          <p>
            {" "}
            <EmailOutlinedIcon /> artsystudios@gmail.com
          </p>
          <p>
            {" "}
            <FmdGoodOutlined /> Lagos, Nigeria
          </p>
        </div>
      </div>
      <div className="copyright">
        Artsystudios <span>C</span>. All rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
