import React from "react";
import { Routes, Route } from "react-router-dom";

import Blue from "./blue";
import Red from "./red";
import Home from "./home";

const PageContent = () => {
  return (
    <>
      <div id="main-section">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
        </Routes>
      </div>
    </>
  );
};

export default PageContent;
