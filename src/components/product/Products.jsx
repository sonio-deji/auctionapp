import "./product.scss";
import { products } from "../../tempData";
import {
  FavoriteBorderOutlined,
  KeyboardArrowLeftOutlined,
  KeyboardArrowRightOutlined,
} from "@mui/icons-material";
import { useState } from "react";
const Products = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlider = (direction) => {
    if (direction === "left") {
      setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : 2);
    } else {
      setCurrentIndex(currentIndex < 2 ? currentIndex + 1 : 0);
    }
  };
  console.log(products.length, currentIndex);
  return (
    <div className="products">
      <div className="container">
        {products.map((product) => (
          <div
            className="product"
            key={product.id}
            style={{ transform: `translateX(${currentIndex * -100}%)` }}
          >
            <FavoriteBorderOutlined className="like" />
            <img src={product.image} alt="" />
            <div className="title">
              <p>{product.title}</p>
              <div className="price">
                <img src="/src/assets/eth.png" alt="" />
                <span>{product.price}</span>
              </div>
            </div>
          </div>
        ))}
        <div className="directionContainer">
          <div className="direction">
            <div className="arrow" onClick={() => handleSlider("left")}>
              <KeyboardArrowLeftOutlined className="arrowImg" />
            </div>
            <div className="arrow">
              <KeyboardArrowRightOutlined
                className="arrowImg"
                onClick={() => handleSlider("right")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
