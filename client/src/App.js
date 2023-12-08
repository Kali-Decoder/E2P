import React, { Component, Fragment } from "react";
import LandingPage from "./pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import BackGradients from "./components/BackGradients";

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
      </Routes>
      
    </>
  );
}

export default App;
