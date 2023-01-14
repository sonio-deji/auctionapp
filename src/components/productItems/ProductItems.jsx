import { Link } from "react-router-dom";
import { marketPlace } from "../../tempData";
import "./productItems.scss";

const ProductItems = () => {
  return (
    <div className="productItems">
      <div className="container">
        {marketPlace.map((market) => (
          <Link
            key={market.id}
            style={{ textDecoration: "none", color: "inherit" }}
            to={`/product/${market.id}`}
          >
            <div className="product">
              <div className="imgContainer">
                <img src={market.image} alt="" />
              </div>
              <div className="detailsContainer">
                <p className="title">{market.title}</p>
                <p className="price">{market.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductItems;
