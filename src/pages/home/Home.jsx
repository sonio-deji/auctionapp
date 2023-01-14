import "./home.scss";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import { heroSlider } from "../../tempData";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { FmdGoodOutlined } from "@mui/icons-material";
import Newsletter from "../../components/newsletter/Newsletter";
import Footer from "../../components/footer/Footer";
import { useEffect, useState } from "react";
import { topCreatorsImage } from "../../tempData";

const Home = () => {
  // to do download poppins, bellefair and baskervville fonts
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderTwo, setSliderTwo] = useState(1);
  const [sliderThree, setSliderThree] = useState(2);
  const [sliderFour, setSliderFour] = useState(3);
  const [sliderFive, setSliderFive] = useState(4);
  const [topCreators, setTopCreators] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % heroSlider.length);
      setSliderTwo((sliderTwo + 1) % heroSlider.length);
      setSliderThree((sliderThree + 1) % heroSlider.length);
      setSliderFour((sliderFour + 1) % heroSlider.length);
      setSliderFive((sliderFive + 1) % heroSlider.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [
    currentIndex,
    heroSlider.length,
    sliderTwo,
    sliderThree,
    sliderFour,
    sliderFive,
  ]);
  useEffect(() => {
    const interval = setInterval(() => {
      setTopCreators((topCreators + 1) % topCreatorsImage.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [topCreators, topCreatorsImage.length]);
  return (
    <div className="home">
      <section className="topSection">
        <h1>Photography is poetry & beautiful untold stories</h1>
        <p>
          Flip through more than 10,000 vintage shots, old photography, historic
          images and captures seamlessly in one place. Register to get top
          access.
        </p>
        <div className={`heroSlider`}>
          <div className="imgContainer">
            {heroSlider.map((image, index) => {
              return (
                <img
                  key={index}
                  src={image}
                  alt=""
                  style={{ transform: `translateX(${currentIndex * -100}%)` }}
                />
              );
            })}
          </div>
          <div className="imgContainer">
            {heroSlider.map((image, index) => {
              return (
                <img
                  key={index}
                  src={image}
                  alt=""
                  style={{
                    transform: `translateX(${sliderTwo * -100}%)`,
                  }}
                />
              );
            })}
          </div>
          <div className="imgContainer">
            {heroSlider.map((image, index) => {
              return (
                <img
                  key={index}
                  src={image}
                  alt=""
                  style={{
                    transform: `translateX(${sliderThree * -100}%)`,
                  }}
                />
              );
            })}
          </div>
          <div className="imgContainer">
            {heroSlider.map((image, index) => {
              return (
                <img
                  key={index}
                  src={image}
                  alt=""
                  style={{
                    transform: `translateX(${sliderFour * -100}%)`,
                  }}
                />
              );
            })}
          </div>
          <div className="imgContainer">
            {heroSlider.map((image, index) => {
              return (
                <img
                  key={index}
                  src={image}
                  alt=""
                  style={{
                    transform: `translateX(${sliderFive * -100}%)`,
                  }}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section className="featuredProduct">
        <span className="subHeading">Featured products</span>
        <hr />
        <div className="products">
          <div className="product">
            <div className="container">
              <img
                className="productImage"
                src="/src/assets/booleanEgyptian.png"
                alt=""
              />
              <div className="viewProduct">
                <p>View Product</p>
                <EastOutlinedIcon className="eastDirection" />
              </div>
            </div>

            <div className="productDetails">
              <span className="title">The Boolean Egyptian</span>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur in soluta veniam aut illum porro itaque laboriosam
                blanditiis, corrupti architecto reprehenderit cum hic
                repudiandae delectus provident at ducimus exercitationem
                consectetur?
              </p>
              <div className="creators">
                <div className="creatorImg">
                  <img src="/src/assets/creator1.png" alt="" />
                  <img src="/src/assets/creator2.png" alt="" />
                  <img src="/src/assets/creator3.png" alt="" />
                  <img src="/src/assets/creator4.png" alt="" />
                  <img src="/src/assets/creator5.png" alt="" />
                </div>
                <span>64 major creators</span>
                <div className="direction">
                  <EastOutlinedIcon className="eastDirection" />
                </div>
              </div>
            </div>
          </div>
          <div className="product">
            <div className="container">
              <img
                className="productImage"
                src="/src/assets/booleanEgyptian2.png"
                alt=""
              />
              <div className="viewProduct">
                <p>View Product</p>
                <EastOutlinedIcon className="eastDirection" />
              </div>
            </div>
            <div className="productDetails">
              <span className="title">The Boolean Egyptian</span>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur in soluta veniam aut illum porro itaque laboriosam
                blanditiis, corrupti architecto reprehenderit cum hic
                repudiandae delectus provident at ducimus exercitationem
                consectetur?
              </p>
              <div className="creators">
                <div className="creatorImg">
                  <img src="/src/assets/creator1.png" alt="" />
                  <img src="/src/assets/creator2.png" alt="" />
                  <img src="/src/assets/creator3.png" alt="" />
                  <img src="/src/assets/creator4.png" alt="" />
                  <img src="/src/assets/creator5.png" alt="" />
                </div>
                <span>64 major creators</span>
                <div className="direction">
                  <EastOutlinedIcon className="eastDirection" />
                </div>
              </div>
            </div>
          </div>
          <div className="product">
            <div className="container">
              <img
                className="productImage"
                src="/src/assets/booleanEgyptian3.png"
                alt=""
              />
              <div className="viewProduct">
                <p>View Product</p>
                <EastOutlinedIcon className="eastDirection" />
              </div>
            </div>
            <div className="productDetails">
              <span className="title">The Boolean Egyptian</span>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur in soluta veniam aut illum porro itaque laboriosam
                blanditiis, corrupti architecto reprehenderit cum hic
                repudiandae delectus provident at ducimus exercitationem
                consectetur?
              </p>
              <div className="creators">
                <div className="creatorImg">
                  <img src="/src/assets/creator1.png" alt="" />
                  <img src="/src/assets/creator2.png" alt="" />
                  <img src="/src/assets/creator3.png" alt="" />
                  <img src="/src/assets/creator4.png" alt="" />
                  <img src="/src/assets/creator5.png" alt="" />
                </div>
                <span>64 major creators</span>
                <div className="direction">
                  <EastOutlinedIcon className="eastDirection" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="upcoming">
        <div className="container">
          <span className="upcomingTitle">
            See Upcoming Auction and Exhibitions
          </span>
          <hr />
          <div className="imgContainer">
            <img src="/src/assets/upcomingimg.png" alt="" />
            <div className="details">
              <div className="left">
                <span className="position">01</span>
                <div className="refined">
                  <span className="title">MONALISA REDEFINED IN STYLE</span>
                  <span className="time">START ON : 8:00 GTS MONDAY</span>
                  <p className="deal">
                    GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH
                    INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRIGING THEIR
                    HIGHEST AND LOWEST BIDS.
                  </p>
                </div>
              </div>
              <div className="right">
                <span>See more</span>
                <button>Set a reminder</button>
              </div>
            </div>
          </div>
          <div className="images">
            <input type="range" readOnly />
            <div className="sliderSection">
              <div className="direction"> &lt;</div>
              <div className="direction"> &gt;</div>
            </div>
          </div>
        </div>
      </section>
      <section className="explore">
        <div className="container">
          <hr />
          <div className="item">
            <p>Explore marketplace</p>
            <div>
              <EastOutlinedIcon className="eastDirection" />
            </div>
          </div>
          <div className="item">
            <p>See auctions</p>
            <div>
              <EastOutlinedIcon className="eastDirection" />
            </div>
          </div>
        </div>
      </section>
      <section className="topCreators">
        <div className="container">
          <div className="header">
            <span>TOP CREATORS OF THE WEEK</span>
            <div className="sectionSelector">
              <input type="range" orient="vertical" readOnly />
              <div className="select">
                <p className="option">Editorials</p>
                <p className="option">Fashion</p>
                <p className="option">Lifestyle</p>
                <p className="option">Blueprint</p>
              </div>
            </div>
          </div>
          <p className="desc">
            “Everything always looked better in black and white. Everything
            always as if it were the first time; there's always more people in a
            black and white photograph. It just makes it seem that there were
            more people at a gig, more people at a football match, than with
            colour photography. Everything looks more exciting.”– Jack Lowden
          </p>
          <div className="container">
            <img src={topCreatorsImage[topCreators]} alt="" />
          </div>
        </div>
      </section>
      <div className="newsletter">
        <Newsletter />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
