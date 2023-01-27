import React from "react";
import { Header } from "../Components/Header";
import logo from "../img/logo.png";

export const Logged = () => {
  return (
    <div>
      <div className="app">
        <Header />
        <div className="inputmiddle">
          <img src={logo} alt="" width="184" height="118" />
        </div>
      </div>
    </div>
  );
};
