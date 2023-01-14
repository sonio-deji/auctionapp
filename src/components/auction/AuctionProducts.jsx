import { auctionProducts } from "../../tempData";
import "./auctionProducts.scss";
import { Link } from "react-router-dom";

const AuctionProducts = () => {
  return (
    <div className="auctionProducts">
      {auctionProducts.map((product) => (
        <Link
          to={`/liveauction/${product.id}`}
          key={product.id}
          style={{ textDecoration: "none", color: "none" }}
        >
          <div className="product">
            <img src={product.image} alt="" />
            <div className="time">{product.time}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AuctionProducts;
