import { FavoriteBorderOutlined } from "@mui/icons-material";
import AuctionProducts from "../../components/auction/AuctionProducts";
import { topBids } from "../../tempData";
import "./auction.scss";

const Auction = () => {
  return (
    <div className="auction">
      <p className="directory">
        Home/ <span>Auctions</span>{" "}
      </p>
      <p className="overview">
        Here's an overview of products actively on auction, explore
      </p>
      <div className="auctions">
        <AuctionProducts />
      </div>
      <div className="topBids">
        <p className="heading">Top bids from popular creators</p>
        <div className="bids">
          {topBids.map((bid) => (
            <div className="productAuction" key={bid.id}>
              <div className="top">
                <div className="favouriteIcon">
                  <FavoriteBorderOutlined />
                </div>
                <img src={bid.image} alt="" />
                <p className="productTitle">{bid.title}</p>
              </div>
              <div className="bidSection">
                <p className="item">
                  Creator: <span>{bid.creator}</span>{" "}
                </p>
                <p className="item">
                  Date: <span>{bid.date}</span>{" "}
                </p>
                <p className="item">
                  Highest bid: <span>{bid.highestBid}</span>{" "}
                </p>
                <div className="placeBid">
                  <div className="currentbid">
                    <p className="title">Current bid</p>
                    <p className="amount">{bid.currentBid}</p>
                  </div>
                  <button>Place bid</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Auction;
