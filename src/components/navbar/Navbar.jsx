import "./navbar.scss";
import { useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

import { Link, useLocation, useParams } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  const location = useLocation();
  const params = useParams();
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className="navbar">
      <div className="menu" onClick={() => setSidebar(!sidebar)}>
        {" "}
        <MenuOutlinedIcon className="menuIcon" />{" "}
      </div>
      <div className="logo">ARTSY.</div>
      <div className="navigation">
        <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
          <span
            style={{
              borderBottom:
                location.pathname === "/" ? "1px solid gray" : "none",
            }}
          >
            Home
          </span>
        </Link>
        <Link
          to={"/product"}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <span
            style={{
              borderBottom:
                location.pathname === "/product" ||
                location.pathname === `/product/${params.id}`
                  ? "1px solid gray"
                  : "none",
            }}
          >
            Marketplace
          </span>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to={"/auction"}
        >
          <span
            style={{
              borderBottom:
                location.pathname === "/auction" ? "1px solid gray" : "none",
            }}
          >
            Auction
          </span>
        </Link>
        <Link style={{ textDecoration: "none", color: "inherit" }} to={"/drop"}>
          <span
            style={{
              borderBottom:
                location.pathname === "/drop" ? "1px solid gray" : "none",
            }}
          >
            Drop
          </span>
        </Link>
      </div>
      <div className="cartSec">
        <SearchIcon />
        <Link to={"/cart"} style={{ textDecoration: "none", color: "inherit" }}>
          <div className="notificationContainer">
            <ShoppingCartOutlinedIcon />
            <div className="notificationDot"></div>
          </div>
        </Link>

        <div className="notificationIconContainer">
          <NotificationsOutlinedIcon className="notificationIcon" />
          <div className="notificationDot"></div>
        </div>
      </div>
      {sidebar && <Sidebar setSidebar={setSidebar} />}
    </div>
  );
};

export default Navbar;
