import React from "react";

const MemberCard = ({ item,setIsOpen }) => {
  const { price, name, id, walletAddress, location, energyToTrade } = item;
  console.log(item, "item");
  return (
    <>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-black ">
        <div className="flex flex-col items-center pb-10">
          <img
            className="w-24 h-24 mb-0 rounded-full shadow-lg mt-4"
            src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
            alt="Bonnie image"
          />
          <h5 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">
            {name}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Price/Unit :{" "}
            <span className="text-green-500 font-bold">{price} THOR</span>
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Energy to be Trade: 
             <span className="text-green-500 font-bold">{energyToTrade}</span>
          </span>
          <div className="flex mt-4 md:mt-6">
            <button
            
              onClick={() => setIsOpen(true)}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Buy Energy
            </button>
            <button
            
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberCard;
