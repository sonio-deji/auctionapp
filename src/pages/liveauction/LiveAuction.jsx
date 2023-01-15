import "./liveAuction.scss";
import { CloseOutlined, East, FavoriteOutlined } from "@mui/icons-material";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { Link } from "react-router-dom";
const LiveAuction = () => {
  const liked = false;
  return (
    <div className="liveAuction">
      <p className="directory">
        Home/Auction/ <span>Live bid</span>{" "}
      </p>

      <div className="container">
        <div className="left">
          <img src="/assets/auctionpic.png" />
          <div className="top">
            <div className="closeButton">
              <Link to={"/auction"} style={{ color: "inherit" }}>
                <CloseOutlined />
              </Link>
            </div>
            <button>LIVE</button>
          </div>
          <div className="middle">Current bid: $45.00</div>
          <div className="bottom">tag: lost or wither</div>
        </div>
        <div className="right">
          <div className="messagingSection">
            <div className="sender">
              <div className="senderImg">
                <img src="/assets/creator1.png" alt="" />
              </div>
              <div className="text">
                <p className="op">Opeyemi Taiwo</p>
                <p className="message">tight bid</p>
              </div>
            </div>
            <div className="sender">
              <div className="senderImg">
                <img src="/assets/creator1.png" alt="" />
              </div>
              <div className="text">
                <p className="op">Opeyemi Taiwo</p>
                <p className="message">tight bid</p>
              </div>
            </div>
            <div className="sender">
              <div className="senderImg">
                <img src="/assets/creator1.png" alt="" />
              </div>
              <div className="text">
                <p className="op">Opeyemi Taiwo</p>
                <p className="message">tight bid</p>
              </div>
            </div>
            <div className="sender">
              <div className="senderImg">
                <img src="/assets/creator1.png" alt="" />
              </div>
              <div className="text">
                <p className="op">Opeyemi Taiwo</p>
                <p className="message">tight bid</p>
              </div>
            </div>
            <div className="sender">
              <div className="senderImg">
                <img src="/assets/creator1.png" alt="" />
              </div>
              <div className="text">
                <p className="op">Opeyemi Taiwo</p>
                <p className="message">tight bid</p>
              </div>
            </div>
          </div>
          <div className="creatorTag">
            <p>Creator: Stormi Rylie</p>
          </div>
          <div className="sendingSection">
            <div className="inputSection">
              <div className="background">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="place your bid..."
                />
                <div className="sendOutlined">
                  <SendOutlinedIcon className="sendIcon" />
                </div>
              </div>
            </div>
            <div className="likeButton">
              <FavoriteOutlined style={{ color: "red" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="upcomingDrops">
        <p>See upcoming drops</p>
        <div className="arrow">
          <East />
        </div>
      </div>
    </div>
  );
};

export default LiveAuction;
