import React from "react";
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";

const DashboardAdmin = () => {
  return (
    <div className="flex flex-col sm:flex-row">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default DashboardAdmin;
