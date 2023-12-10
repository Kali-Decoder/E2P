import React from "react";
import MintCard from "../utils/MintCard";
const Dashboard = () => {
  return (
    <>
      <div className="p-4 sm:ml-64 mt-5">
        <div className="p-4 rounded-lg dark:border-gray-700">
          <h2 className="text-2xl font-semibold mb-4">Dashboard Overview</h2>
          <div className="">
            <MintCard />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {renderDashboardItem(
              "Token Spend",
              "Lorem ipsum dolor sit amet",
              "h-48"
            )}
            {renderDashboardItem(
              "Token Received",
              "Consectetur adipiscing elit",
              "h-48"
            )}
            {renderDashboardItem(
              "Kuch Toh Hoga",
              "Sed do eiusmod tempor incididunt",
              "h-48"
            )}
            {renderDashboardItem("Pta Ni", "Ut enim ad minim veniam", "h-48")}
            {renderDashboardItem(
              "Idk",
              "Duis aute irure dolor in reprehenderit",
              "h-48"
            )}
            {renderDashboardItem(
              "Last Bhi Ni Pta",
              "Excepteur sint occaecat cupidatat",
              "h-48"
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const renderDashboardItem = (title, description, height) => (
  <div
    className={`flex flex-col pt-3 items-center rounded bg-gray-50 dark:bg-gray-800 ${height}`}
  >
    <h3 className="text-lg font-semibold mb-2">{title}</h3>

    <p className="text-sm">{description}</p>
  </div>
);

export default Dashboard;
