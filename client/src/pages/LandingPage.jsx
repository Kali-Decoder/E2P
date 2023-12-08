import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { FaSuperpowers } from "react-icons/fa";
import { GiRollingEnergy } from "react-icons/gi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { FiSun } from "react-icons/fi";
import { PiGitDiffLight } from "react-icons/pi";
import { TbBusinessplan } from "react-icons/tb";
import axios from "axios";
import { useMediaQuery } from "react-responsive";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const LandingPage = () => {
  const isMobile = useMediaQuery({ maxWidth: 700 }); // Define the mobile breakpoint
  const isLaptop = useMediaQuery({ minWidth: 780 });
  const isTablet = useMediaQuery({ maxWidth: 900 });

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const navigate = useNavigate();

  const toHome = () => {
    const element = document.getElementById("_");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const toFeatures = () => {
    const element = document.getElementById("features");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const toUseCases = () => {
    const element = document.getElementById("usecases");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const toRegister = () => {
    navigate("/register");
  };
  return (
    <>
      {!isTablet && (
        <section className="w-full px-8 text-gray-700 bg-black overflow-x-hidden">
          <div className=" flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-6xl">
            <div className="relative flex flex-col md:flex-row">
              <a
                href="/"
                className="flex mt-4 flex-col items-center mb-5 font-bold text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
              >
                <GiRollingEnergy size={40} color="white" />
                <span
                  className="mx-auto mt-1 text-white select-none"
                  style={{ fontSize: "25px" }}
                >
                  Eco
                  <span className="text-indigo-800">-</span>
                  <span className="text-indigo-600">GRiD</span>
                </span>
              </a>
            </div>

            <div className="inline-flex  items-center ml-5 space-x-6 lg:justify-end">
              <nav className="flex flex-wrap justify-center items-center mb-0 text-base  md:border-gray-200">
                <a
                  href="#_"
                  className="mr-1 text-2xl font-medium leading-6 text-gray-600 hover:text-white"
                >
                  Home
                </a>
                <a
                  href="#features"
                  className="mr-1 text-2xl font-medium leading-6 text-gray-600 hover:text-white"
                >
                  Features
                </a>
                <a
                  href="#usecases"
                  className="mr-1 text-2xl font-medium leading-6 text-gray-600 hover:text-white"
                >
                  Use-Cases
                </a>
              </nav>
              <a
                href="/register"
                className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
              >
                Let's Go, See Future
              </a>
            </div>
          </div>
        </section>
      )}
      {isTablet && (
        <div className="bg-black p-4 flex justify-between items-center">
          <div className="flex items-center">
            <GiRollingEnergy size={40} color="white" />
            {/* <span className="text-white text-lg font-semibold"></span> */}
          </div>

          {/* Hamburger menu icon */}
          {/* <MenuIcon
          className="h-6 w-6 text-white cursor-pointer"
          onClick={toggleMenu}
        /> */}
          <div onClick={toggleMenu} className=" lg:hidden">
            {menuOpen ? (
              <AiOutlineClose style={{ color: "white" }} size={20} />
            ) : (
              <AiOutlineMenu style={{ color: "white" }} size={20} />
            )}
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="lg:hidden absolute top-16 right-4 bg-black p-2 rounded">
              <div className="mb-4" onClick={toHome}>
                <p className="text-2xl font-medium leading-6 text-gray-600">
                  Home
                </p>
              </div>
              <div className="mb-4" onClick={toFeatures}>
                <p className="text-2xl font-medium leading-6 text-gray-600">
                  Features
                </p>
              </div>
              <div className="mb-4" onClick={toUseCases}>
                <p className="text-2xl font-medium leading-6 text-gray-600">
                  Use-Cases
                </p>
              </div>
              <div className="mb-4" onClick={toRegister}>
                <p className="text-2xl font-medium leading-6 text-gray-600">
                  Let's Go, See Future
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};
export default LandingPage;
