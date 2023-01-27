import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./Pages/Login";
import { Homepage } from "./Pages/Homepage";
import { History } from "./Pages/History";
import { Signup } from "./Pages/Signup";
import { Logged } from "./Pages/Logged";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/history" element={<History />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logged" element={<Logged />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
