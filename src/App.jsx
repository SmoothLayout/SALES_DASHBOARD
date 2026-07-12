import React from "react";
import SideBar from "./component/SideBar";
import TopBar from "./component/TopBar";
import RevenueChart from "./component/RevenueChart";
import RecentOrders from "./component/RecentOrders";

const App = () => {
  return (
    <div className="flex min-h-screen bg-slate-50 font-sans text-slate-900">
      <SideBar />
      <div className="flex-1">
        <TopBar />
        <main className="p-6 space-y-6">
          <div className="grid grid-cols-4"></div>
          <RevenueChart />
          <RecentOrders />
        </main>
      </div>
    </div>
  );
};

export default App;