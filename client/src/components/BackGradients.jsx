import React from "react";

const BackGradients = ({ page }) => {
  return (
    <div className="transition-all">
      <div className="absolute z-0 gradient__blue rounded-full w-[20%] h-[25%] left-[10vw] top-[15vw] "></div>
      <div className="absolute z-0 gradient__pink rounded-full w-[20%] h-[25%] right-[10vw] bottom-[10vw] "></div>

      {page === "home" || page === "market" ? (
        <>
          <div className="absolute z-0 gradient__blue2 rounded-full w-[15%] h-[20%] lg:left-40 mobile:left-10 top-[90rem] "></div>
          <div className="absolute z-0 gradient__blue rounded-full w-[20%] h-[25%] right-10 top-[140rem] "></div>
          <div className="absolute z-0 gradient__pink rounded-full w-[20%] h-[25%] left-[5rem] top-[180rem] "></div>
          <div className="absolute z-0 gradient__blue2 rounded-full w-[10%] h-[15%] left-[15rem] top-[190rem] "></div>
          <div className="absolute z-0 gradient__pink rounded-full w-[20%] h-[25%] right-[10vw] top-[400vh] "></div>
        </>
      ) : null}

    </div>
  );
};

export default BackGradients;
