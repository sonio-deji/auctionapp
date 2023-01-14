import {
  TuneOutlined,
  KeyboardArrowUpOutlined,
  KeyboardArrowDownOutlined,
} from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import "./product.scss";
import { useState } from "react";
import ProductItems from "../../components/productItems/ProductItems";

const Product = () => {
  const [category, setCategory] = useState(false);
  const [price, setPrice] = useState(false);
  const [artist, setArtist] = useState(false);
  const [collection, setCollection] = useState(false);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(101);

  const handleMinimum = (e) => {
    setMin(e.target.value);
  };
  const handleMaximum = (e) => {
    setMax(e.target.value);
  };
  return (
    <div className="product">
      <div className="container">
        <div className="left">
          <div className="searchContainer">
            <SearchIcon />
            <input type="search" placeholder="search" />
          </div>
          <div className="filter">
            <div className="heading">
              <TuneOutlined />
              <span>Filter</span>
            </div>
            <div className="filterType">
              <div className="category" onClick={() => setCategory(!category)}>
                <p>By category</p>
                {category === false ? (
                  <KeyboardArrowDownOutlined />
                ) : (
                  <KeyboardArrowUpOutlined />
                )}
              </div>
              {category && (
                <div className="checkboxes">
                  <label htmlFor="editorials">
                    <input type="checkbox" name="editorial" id="" />
                    Editorials
                  </label>
                  <label htmlFor="Fashion">
                    <input type="checkbox" name="Fashion" id="" />
                    Fashion
                  </label>
                  <label htmlFor="Optics">
                    <input type="checkbox" name="Optics" id="" />
                    Optics
                  </label>
                  <label htmlFor="Art & Museum">
                    <input type="checkbox" name="Art & Museum" id="" />
                    Art & Museum
                  </label>
                  <label htmlFor="Nature">
                    <input type="checkbox" name="Nature" id="" />
                    Nature
                  </label>
                </div>
              )}
            </div>
            <div className="filterByPrice">
              <div className="price" onClick={() => setPrice(!price)}>
                By price{" "}
                {price === false ? (
                  <KeyboardArrowDownOutlined />
                ) : (
                  <KeyboardArrowUpOutlined />
                )}{" "}
              </div>
              {price && (
                <div className="range">
                  <div className="amountRange">
                    <div className="number">
                      ${min} - ${max}
                    </div>

                    <div className="sliderControl">
                      <input
                        className="minRange"
                        type="range"
                        name=""
                        id=""
                        min={0}
                        max={100}
                        value={min}
                        onChange={handleMinimum}
                      />
                      <input
                        className="maxRange"
                        type="range"
                        name=""
                        id=""
                        min={101}
                        max={200}
                        onChange={handleMaximum}
                        value={max}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="filterByArtist">
              <div className="artist" onClick={() => setArtist(!artist)}>
                By artist{" "}
                {artist === false ? (
                  <KeyboardArrowDownOutlined />
                ) : (
                  <KeyboardArrowUpOutlined />
                )}
              </div>
              {artist && (
                <div className="artists">
                  <p>sonio</p>
                  <p>Olajide</p>
                  <p>Mariam</p>
                  <p>Remi</p>
                </div>
              )}
            </div>
            <div className="allCategory">
              <p>All</p>
              <p>Below $100</p>
              <p>$100 - $150</p>
              <p>$150 - $200</p>
              <p>Above $200</p>
            </div>
            <div className="collectionYear">
              <div
                className="collectionHeading"
                onClick={() => setCollection(!collection)}
              >
                Collection year{" "}
                {category === false ? (
                  <KeyboardArrowDownOutlined />
                ) : (
                  <KeyboardArrowUpOutlined />
                )}
              </div>
              {collection && (
                <div className="years">
                  <p>2022</p>
                  <p>2021</p>
                  <p>2020</p>
                  <p>2019</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="right">
          <div className="top">
            <select name="" id="" className="filter">
              <option value="filter">filter</option>
            </select>
            <div className="section">See 1-6 of 15 results</div>
            <select name="" id="">
              <option value="">Sort by</option>
            </select>
          </div>
          <div className="productItems">
            <ProductItems />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
