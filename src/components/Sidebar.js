import React from "react";

const Sidebar = () => {
  return (
    <div className="w-full sm:w-1/4 bg-green-900 text-white h-screen p-5 sm:relative  z-10">
      <h1 className="text-2xl font-bold mb-8">Welcome @username</h1>
      <ul className="space-y-4">
        <li className="hover:bg-green-700 p-2 rounded">Home Featured</li>
        <li className="hover:bg-green-700 p-2 rounded">Mansion Listings</li>
        <li className="hover:bg-green-700 p-2 rounded">Penthouse Listings</li>
        <li className="hover:bg-green-700 p-2 rounded">Magazine Post</li>
        <li className="hover:bg-green-700 p-2 rounded">Traffic Analytics</li>
      </ul>
      <button className="absolute bottom-5 left-5 bg-red-600 px-4 py-2 rounded">
        Log out
      </button>
    </div>
  );
};

export default Sidebar;
