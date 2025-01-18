import React, { useState } from "react";
import { FaEdit, FaTrash, FaLock, FaEye } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
const Dashboard = ({
  posts = [],
  currentPage = 1,
  totalPages = 1,
  totalItems = 0,
  itemsPerPage = 5,
  onPageChange = () => {},
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter posts based on the search term
  const filteredPosts = posts.filter((post) =>
    post.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(startItem + itemsPerPage - 1, filteredPosts.length);

  const currentPosts = filteredPosts.slice(startItem - 1, endItem);

  return (
    <div className="flex-1 ">
      {/* Header */}
      <div className="flex bg-[#F9F9F8] pr-4 flex-col sm:flex-row justify-end py-6">
        <h1 className="text-2xl font-bold">THE MANSION MARKET</h1>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <h1 className="text-2xl  font-bold mb-4">MAGAZINE POST</h1>
        <div className="flex flex-col sm:flex-row justify-between items-center mb-5">
          <h1 className="flex flex-col text-base font-bold">
            <span>Post List</span>
            <span>
              Dashboard <span className="text-blue-600">/ Post List</span>
            </span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-3 items-center">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              + Create Post
            </button>
            <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
              View Hidden Posts
            </button>
            <div className="flex ">
              <div className="flex items-center w-full md:w-auto border border-r-0 border-gray-300 rounded-lg overflow-hidden shadow-sm">
                <input
                  type="text"
                  placeholder="Search"
                  className="flex-1 px-4 py-2 text-gray-700 focus:outline-none"
                />
              </div>
              <button className="bg-green-800 px-4 border  border-gray-300 flex items-center justify-center text-white hover:bg-green-600 transition">
                <FaSearch />
              </button>
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <div className="bg-blue-400 text-white py-2 px-4">
            <h2 className="text-lg font-semibold">List View</h2>
          </div>
          <table className="min-w-full border">
            <thead>
              <tr className="bg-blue-50">
                <th className="py-2 px-4 border">SL.No</th>
                <th className="py-2 px-4 border">Name</th>
                <th className="py-2 px-4 border">Category</th>
                <th className="py-2 px-4 border">Author</th>
                <th className="py-2 px-4 border">Time Posted</th>
                <th className="py-2 px-4 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentPosts.map((post, index) => (
                <tr
                  key={post.id}
                  className={`hover:bg-gray-100 ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <td className="py-2 px-4 border text-center">
                    {startItem + index}
                  </td>
                  <td className="py-2 px-4 border">{post.name}</td>
                  <td className="py-2 px-4 border">{post.category}</td>
                  <td className="py-2 px-4 border">{post.author}</td>
                  <td className="py-2 px-4 border">{post.date}</td>
                  <td className="py-2 px-4 border flex justify-center gap-2">
                    <button className="text-green-600 hover:text-green-800">
                      <FaEye />
                    </button>
                    <button className="text-blue-600 hover:text-blue-800">
                      <FaEdit />
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      <FaTrash />
                    </button>
                    <button className="text-yellow-600 hover:text-yellow-800">
                      <FaLock />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-4 py-4 px-4">
            <span>
              Showing {startItem}-{endItem} of {filteredPosts.length} posts
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded ${
                  currentPage === 1 ? "bg-gray-300" : "bg-blue-600 text-white"
                }`}
              >
                Previous
              </button>
              <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded ${
                  currentPage === totalPages
                    ? "bg-gray-300"
                    : "bg-blue-600 text-white"
                }`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Sample data for 10 posts
const samplePosts = [
  {
    id: 1,
    name: "Post 1",
    category: "Category A",
    author: "Author 1",
    date: "2023-12-01",
  },
  {
    id: 2,
    name: "Post 2",
    category: "Category B",
    author: "Author 2",
    date: "2023-12-02",
  },
  {
    id: 3,
    name: "Post 3",
    category: "Category C",
    author: "Author 3",
    date: "2023-12-03",
  },
  {
    id: 4,
    name: "Post 4",
    category: "Category A",
    author: "Author 4",
    date: "2023-12-04",
  },
  {
    id: 5,
    name: "Post 5",
    category: "Category B",
    author: "Author 5",
    date: "2023-12-05",
  },
  {
    id: 6,
    name: "Post 6",
    category: "Category C",
    author: "Author 6",
    date: "2023-12-06",
  },
  {
    id: 7,
    name: "Post 7",
    category: "Category A",
    author: "Author 7",
    date: "2023-12-07",
  },
  {
    id: 8,
    name: "Post 8",
    category: "Category B",
    author: "Author 8",
    date: "2023-12-08",
  },
  {
    id: 9,
    name: "Post 9",
    category: "Category C",
    author: "Author 9",
    date: "2023-12-09",
  },
  {
    id: 10,
    name: "Post 10",
    category: "Category A",
    author: "Author 10",
    date: "2023-12-10",
  },
];

// Wrapper component to demonstrate Dashboard
const DashboardWrapper = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(samplePosts.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <Dashboard
      posts={samplePosts}
      currentPage={currentPage}
      totalPages={totalPages}
      itemsPerPage={itemsPerPage}
      onPageChange={handlePageChange}
    />
  );
};

export default DashboardWrapper;
