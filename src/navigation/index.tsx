import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Aero, Aqua, Home, King, Piro, Terra } from "../screens";
import Elements from "../screens/Elements";

const Navigation = () => {
  return (
    <BrowserRouter basename="/Elements_rule">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/king" element={<King />} />
        <Route path="/piro" element={<Piro />} />
        <Route path="/terra" element={<Terra />} />
        <Route path="/aero" element={<Aero />} />
        <Route path="/aqua" element={<Aqua />} />
        <Route path="/elements" element={<Elements />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
