import { Link } from "react-router-dom";
import "./sidebar.scss";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const Sidebar = ({ setSidebar }) => {
  return (
    <div className="sidebar">
      <div className="top">
        <span>ARTSY.</span>
        <div className="close" onClick={() => setSidebar(false)}>
          <CloseOutlinedIcon className="closeIcon" />
        </div>
      </div>
      <div className="bottom">
        <Link
          to={"/"}
          style={{ textDecoration: "none", color: "inherit" }}
          onClick={() => setSidebar(false)}
        >
          <p>Home</p>
        </Link>
        <Link
          to={"/auction"}
          style={{ textDecoration: "none", color: "inherit" }}
          onClick={() => setSidebar(false)}
        >
          <p>Auctions</p>
        </Link>
        <Link
          to={"/product"}
          style={{ textDecoration: "none", color: "inherit" }}
          onClick={() => setSidebar(false)}
        >
          <p>Marketplace</p>
        </Link>
        <Link
          to={"/drop"}
          style={{ textDecoration: "none", color: "inherit" }}
          onClick={() => setSidebar(false)}
        >
          <p>Drops</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
