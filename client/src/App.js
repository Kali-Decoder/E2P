import React, { Component, Fragment } from "react";
import Authscreen from "./pages/AuthVerification";
import LandingPage from "./pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import BackGradients from "./components/BackGradients";
import Explore from "./pages/Explore";
import SubstationMarketPlace from "./pages/SubstationMarketPlace";
import MarketPlace from "./pages/MarketPlace";
import RegisterUser from "./pages/RegisterUser";
import InvoiceGenerator from "./components/InvoiceGenerator";
import UserDashboard from "./pages/UserDashboard";
import UserTransaction from "./pages/UserTransaction";
import P2PMarketplace from "./pages/P2PMarketplace";

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
        <Route path="/usertx" exact element={<UserTransaction/>} />
        <Route path="/marketplace" exact element={<MarketPlace />} />
        <Route path="/p2p-marketplace" exact element={<P2PMarketplace />} />
        <Route path="/explore" exact element={<Explore />} />
        <Route
          path="/:id/substations"
          exact
          element={<SubstationMarketPlace />}
        />
        <Route path="/invoice" exact element={<InvoiceGenerator/>}/>
      </Routes>
      
    </>
  );
}

export default App;
