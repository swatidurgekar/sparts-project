//NAVBAR COMPONENT

import { FaBell, FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-white h-16 w-full flex items-center justify-between px-6 shadow rounded-tr-xl">
      <div className="flex items-center space-x-4">
        <h1 className="font-bold text-xl">Students</h1>
      </div>

      <div className="flex items-center space-x-6">
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2"
        />
        <FaBell className="text-gray-600 text-xl" />
        <div className="flex items-center space-x-2">
          <img src="" alt="Profile" className="w-10 h-10 rounded-full" />
          <FaChevronDown className="text-gray-600 text-xl" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
