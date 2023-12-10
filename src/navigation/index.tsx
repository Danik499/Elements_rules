import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, King } from "../screens";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/king" element={<King />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
