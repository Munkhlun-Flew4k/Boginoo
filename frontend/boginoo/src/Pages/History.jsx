import React, { useEffect, useState } from "react";
import { Header } from "../Components/Header";
import logo from "../img/logo.png";
import { Links } from "../Components/Links";
import "../css/History.css";
import axios from "axios";

export const History = () => {
  const [all, setAll] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000")
      .then(function (response) {
        console.log(response.data);
        setAll(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  console.log(all);
  return (
    <div>
      <div className="app">
        <Header />
        <div className="appmiddle">
          <img src={logo} alt="" width="184" height="118" />
          <div className="historydiv">
            <h1 className="historytext">History</h1>
            <div className="historydiv2">
              {all.map((el, ind) => {
                return (
                  <Links
                    key={ind}
                    shorturl={el.shortURL}
                    originalurl={el.originalURL}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
