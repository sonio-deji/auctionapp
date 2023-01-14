import "./dropProducts.scss";
import { drops } from "../../tempData";

const DropProducts = () => {
  return (
    <div className="dropMap">
      {drops.map((drop) => (
        <div className="dropContainer" key={drop.id}>
          <div className="left">
            <img src={drop.image} alt="" />
            <div className="timeRemaining">
              <p>{!drop.time ? "Auction Ended" : "Time Remaining"}</p>
              <div className="timeSection">
                <p>{drop?.time}</p>
                <button
                  style={{
                    background: drop.status === "Ended" ? "#999EA5" : "#4693ED",
                  }}
                >
                  {drop.status === "upcoming" || drop.status === "Live Now"
                    ? "join"
                    : "view"}
                </button>
              </div>
            </div>
          </div>
          <div className="right">
            <div
              className="status"
              style={{
                background:
                  drop.status === "upcoming"
                    ? "#4693ED"
                    : drop.status === "Live Now"
                    ? "#3EA03B"
                    : drop.status === "Ended"
                    ? "#999EA5"
                    : "white",
              }}
            >
              {drop.status}
            </div>
            <p className="date">{drop.date}</p>
            <p className="title">{drop.title}</p>
            <p className="desc">{drop.desc}</p>
            <p className="creator">
              Creator: <span>{drop.creator}</span>{" "}
            </p>
            <p className="getNotified">
              {drop.status === "upcoming"
                ? "Get notified"
                : drop.status === "Live Now"
                ? "Join now"
                : drop.status === "Ended"
                ? "View"
                : ""}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DropProducts;
