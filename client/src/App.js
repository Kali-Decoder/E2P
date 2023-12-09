import React, { Component, Fragment } from "react";
import Authscreen from "./pages/AuthVerification";
import LandingPage from "./pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import BackGradients from "./components/BackGradients";
import Explore from "./pages/Explore";
import MarketPlace from "./pages/MarketPlace";
import RegisterUser from "./pages/RegisterUser";
import UserDashboard from "./pages/UserDashboard";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={
        <>
        <div className="-z-30 back-light transition-all">
        <LandingPage />
        <BackGradients page="home" />
        </div>
        </>} />
        <Route path="/auth" exact element={<Authscreen />} />
        <Route path="/register" exact element={<RegisterUser />} />
        <Route path="/user-dashboard" exact element={<UserDashboard/>} />
        <Route path="/marketplace" exact element={<MarketPlace />} />
        <Route path="/explore" exact element={<Explore />} />
      </Routes>
      
    </>
  );
}

export default App;
