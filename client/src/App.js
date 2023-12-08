import React, { Component, Fragment } from "react";
import Authscreen from "./pages/AuthVerification";
import LandingPage from "./pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import RegisterUser from "./pages/RegisterUser";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/register" exact element={<RegisterUser />} />
        <Route path="/auth" exact element={<Authscreen />} />

      </Routes>
    </>
  );
}

export default App;
