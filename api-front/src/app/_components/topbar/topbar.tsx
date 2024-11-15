import { AiOutlineBell, AiOutlineSetting } from "react-icons/ai";
import { useState } from "react";

const TopBar: React.FC = () => {
  const [user] = useState({
    name: "John Doe",
    avatar: "https://via.placeholder.com/40",
  });

  return (
    <div className="flex justify-between items-center bg-white shadow-md p-4 rounded-lg mb-6 overflow-hidden font-medium">
      <div className="text-xs sm:text-sm text-gray-500">
        Pages <span className="text-gray-800 font-medium">/ Dashboard</span>
      </div>

      <div className="flex items-center space-x-3 sm:space-x-4">
        <div className="relative hidden sm:block">
          <input
            type="text"
            placeholder="Type here..."
            className="border border-gray-300 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <button className="bg-black text-white py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg hover:bg-white hover:text-black font-medium border-2 border-black text-xs sm:text-sm">
          Online Builder
        </button>

        <div className="flex items-center space-x-2 sm:space-x-3">
          <AiOutlineBell className="text-lg sm:text-xl text-gray-500 hover:text-gray-800 cursor-pointer" />
          <AiOutlineSetting className="text-lg sm:text-xl text-gray-500 hover:text-gray-800 cursor-pointer" />

          <div className="flex items-center space-x-2">
            <img
              src={user.avatar}
              alt="Profile"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-300"
            />

            <span className="hidden sm:block text-gray-800 text-xs sm:text-sm font-medium">
              {user.name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
