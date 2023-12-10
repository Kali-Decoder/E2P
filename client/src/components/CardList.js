import React from "react";

import "../styles/CardList.css";
import { useNavigate } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import { useRef } from "react";

const CardList = ({ list, type = "horizontal" }) => {
  let navigate = useNavigate();
  const carouselRef = useRef(null);
  let resetTimeout;

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <div
      id="card-list"
      
      style={{ flexDirection: type == "horizontal" ? "row" : "column" }}
    >
      {/* <Carousel
        ref={carouselRef}
        enableAutoPlay={true}
        autoPlaySpeed={4000}
        isRTL={false}
        breakPoints={breakPoints}
        onNextEnd={({ index }) => {
          clearTimeout(resetTimeout);
          resetTimeout = setTimeout(() => {
            carouselRef?.current?.goTo(0);
          }, 4000); // same time
        }}
      > */}
      
      {/* </Carousel> */}
    </div>
  );
};

export default CardList;
