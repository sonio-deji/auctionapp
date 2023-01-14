import {
  FavoriteBorderOutlined,
  FavoriteOutlined,
  KeyboardArrowDownOutlined,
  KeyboardArrowLeftOutlined,
  KeyboardArrowRightOutlined,
} from "@mui/icons-material";
import Products from "../../components/product/Products";
import "./productdetail.scss";
import { useLocation } from "react-router-dom";

const ProductDetail = () => {
  const location = useLocation();
  const liked = false;
  return (
    <div className="product">
      <div className="top">
        Home/Marketplace/Editorials/ <span> Philomena '22</span>{" "}
      </div>
      <div className="picture">
        <div className="productContainer">
          <div className="left">
            <img src="/src/assets/productDesc.png" alt="" />
          </div>
          <div className="right">
            <div className="topPart">
              <span className="imageName">Boolean Egyptian</span>
              <div className="priceTag">
                <img src="/src/assets/eth.png" alt="" />
                <span className="price">0.09</span>
              </div>
            </div>
            <div className="creatorSection">
              <p className="creator">
                Creator : <span>Ali Dawa</span>{" "}
              </p>
              <p className="madeIn"> Made in Italy</p>
              <p className="views">Total views: 1.7k views</p>
              <div className="amount">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
              <div className="submit">
                <button>Add to cart</button>
                <div className="like">
                  {liked === true ? (
                    <FavoriteOutlined
                      style={{ color: "red", fontSize: "30px" }}
                    />
                  ) : (
                    <FavoriteBorderOutlined style={{ fontSize: "30px" }} />
                  )}
                </div>
              </div>
            </div>
            <div className="others">
              <div className="item">
                <p>Description</p>
                <KeyboardArrowDownOutlined className="arrowDown" />
              </div>
              <div className="item">
                <p>Listings</p>
                <KeyboardArrowDownOutlined className="arrowDown" />
              </div>
              <div className="item">
                <p>Status</p>
                <KeyboardArrowDownOutlined className="arrowDown" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="middle">
        <div>
          <p>Explore more from this collection</p>
          <div className="directionContainer">
            <div className="direction">
              <KeyboardArrowLeftOutlined className="arrowDown" />
            </div>
            <div className="direction">
              <KeyboardArrowRightOutlined className="arrowDown" />
            </div>
          </div>
        </div>
      </section>
      <section className="collection">
        <Products />
      </section>
      <div className="explore">
        <div className="buttonWrapper">
          <div>
            <p>Explore all</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
