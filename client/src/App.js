import React, { Component, Fragment } from "react";
import LandingPage from "./pages/LandingPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
