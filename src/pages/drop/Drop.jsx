import DropProducts from "../../components/dropProducts/DropProducts";
import Newsletter from "../../components/newsletter/Newsletter";
import Footer from "../../components/footer/Footer";

import "./drop.scss";

const Drop = () => {
  return (
    <div className="drop">
      <div className="directory">
        <p>
          Home/Auctions/live bids/ <span>Drop</span>
        </p>
      </div>
      <div className="upcomingDrops">
        <div className="title">Upcoming drops</div>
        <p className="note">
          You may turn on notifications so that no drops will miss you
        </p>
        <button>Notify me</button>
      </div>
      <div className="dropItems">
        <DropProducts />
      </div>
      <div className="seeMoreContainer">
        <button className="seeMore">See More</button>
      </div>
      <div className="newsletter">
        <Newsletter />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Drop;
