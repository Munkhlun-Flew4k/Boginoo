import { React } from "react";
import "../css/Header.css";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  let location = useLocation();
  let pathname = location.pathname;
  return (
    <div className="header">
      <h1 className="headertitle">Хэрхэн ажилладаж вэ?</h1>
      <div style={{ display: "flex" }}>
        <Link
          to="/Login"
          id="/Login"
          className="headerbutton"
          style={{ display: pathname === "logged" ? "none" : "flex" }}
        >
          Login
        </Link>
        <Link to="/History" id="/History" className="headerbutton">
          History
        </Link>
        <Link to="/Signup" id="/Signup" className="headerbutton">
          Signup
        </Link>
      </div>
    </div>
  );
};
