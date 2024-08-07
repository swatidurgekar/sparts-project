//SIDEBAR COMPONENT

import {
  FaUser,
  FaSchool,
  FaCalendar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-20 h-screen bg-purple-800 text-white flex flex-col items-center py-6 space-y-8 rounded-tl-xl rounded-bl-xl">
      <div className="flex flex-col items-center mb-6">
        <FaSchool className="text-3xl mb-2" />
      </div>
      <nav className="flex flex-col space-y-8">
        <a href="#" className="flex flex-col items-center space-y-2">
          <FaUser className="text-2xl" />
        </a>
        <a href="#" className="flex flex-col items-center space-y-2">
          <FaCalendar className="text-2xl" />
        </a>
        <a href="#" className="flex flex-col items-center space-y-2">
          <FaCog className="text-2xl" />
        </a>
        <a href="#" className="flex flex-col items-center space-y-2 mt-auto">
          <FaSignOutAlt className="text-2xl" />
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
