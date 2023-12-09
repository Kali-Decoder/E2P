import React, { Component, Fragment } from "react";
import Authscreen from "./pages/AuthVerification";
import LandingPage from "./pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import BackGradients from "./components/BackGradients";
import Explore from "./pages/Explore";
import SubstationMarketPlace from "./pages/SubstationMarketPlace";
import MarketPlace from "./pages/MarketPlace";
import RegisterUser from "./pages/RegisterUser";
import UserDashboard from "./pages/UserDashboard";
import InvoiceGenerator from "./components/InvoiceGenerator";
import LandingPage2 from "./pages/LandingPage2";
import UserTransaction from "./pages/UserTransaction";

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
        <Route path="/l2" exact element={<LandingPage2/>} />
        <Route path="/auth" exact element={<Authscreen />} />
        <Route path="/register" exact element={<RegisterUser />} />
        <Route path="/user-dashboard" exact element={<UserDashboard/>} />
        <Route path="/marketplace" exact element={<MarketPlace />} />
        <Route path="/explore" exact element={<Explore />} />
        <Route
          path="/:id/substations"
          exact
          element={<SubstationMarketPlace />}
        />
        <Route path="/invoice" exact element={<InvoiceGenerator/>}/>
        <Route path="/usertx" exact element={<UserTransaction/>} />
      </Routes>
      
    </>
  );
}

export default App;
