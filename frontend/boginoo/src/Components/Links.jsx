import React from "react";
import "../css/Links.css";

export const Links = (props) => {
  return (
    <div className="Links" style={{ display: "flex" }}>
      <div className="Linkssomediv">
        <h1 className="Linkstitle">Өгөгдсөн холбоос:</h1>
        <div className="Linkslink">{props.originalurl}</div>
      </div>
      <div className="Linkssomediv">
        <h1 className="Linkstitle">Богино холбоос:</h1>
        <h1 className="Linkslink">{props.shorturl}</h1>
      </div>
      <button className="linksbutton">Хуулж авах</button>
    </div>
  );
};
