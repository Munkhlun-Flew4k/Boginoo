import { React } from "react";
import "../css/Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <h1 className="headertitle">Хэрхэн ажилладаж вэ?</h1>
      <div style={{ display: "flex" }}>
        <Link to="/Login" id="/Login" className="headerbutton">
          Login
        </Link>
        <Link to="/History" id="/History" className="headerbutton">
          History
        </Link>
      </div>
    </div>
  );
};
