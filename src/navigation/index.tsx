import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Aero, Aqua, Home, King, Piro, Terra } from "../screens";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/king" element={<King />} />
        <Route path="/piro" element={<Piro />} />
        <Route path="/terra" element={<Terra />} />
        <Route path="/aero" element={<Aero />} />
        <Route path="/aqua" element={<Aqua />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
