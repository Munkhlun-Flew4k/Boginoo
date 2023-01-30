import { React } from "react";
import "../css/Header.css";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  let location = useLocation();
  let pathname = location.pathname;
  console.log(pathname);

  const styles = {
    headerbutton: {
      width: 150,
      height: 44,
      background: "#02b589",
      borderRadius: 100,
      border: 0,
      padding: 0,
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: 20,
      textTransform: "uppercase",
      color: "#ffffff",
      marginRight: 110,
      textDecoration: "none",
      display: pathname === "/logged" ? "none" : "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    history: {
      width: 150,
      height: 44,
      background: "#02b589",
      borderRadius: 100,
      border: 0,
      padding: 0,
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: 20,
      textTransform: "uppercase",
      color: "#ffffff",
      marginRight: 110,
      textDecoration: "none",
      display: pathname === "/logged" ? "flex" : "none",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  return (
    <div className="header">
      <h1 className="headertitle">Хэрхэн ажилладаж вэ?</h1>
      <div style={{ display: "flex" }}>
        <Link to="/Login" id="/Login" style={styles.headerbutton}>
          Login
        </Link>
        <Link to="/History" id="/History" style={styles.history}>
          History
        </Link>
        <Link to="/Signup" id="/Signup" style={styles.headerbutton}>
          Signup
        </Link>
      </div>
    </div>
  );
};
