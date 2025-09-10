import React from "react";
import candle from "../assets/candle.png";
import plus from "../assets/plus.png";
import {motion} from "motion/react";

function Navbar() {
  return (
    <div className="w-[100vw] h-[70px] bg-gray-900 shadow-2xs overflow-hidden flex items-center border-b border-b-gray-100">
      <div className="w-[100vw] mx-[80px]">
        <div className="flex justify-between items-center">
          {/* left side widget */}
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="bg-green-700 p-1 rounded-xl">
              <img src={candle} alt="" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-white font-bold">Finance Dashboard</h1>
              <p className="text-gray-300 text-xs">
                Connect to API and build your custom dashboard
              </p>
            </div>
          </div>
          {/* right side widget */}
          <div className="">
            <motion.button
              initial={{ scale: 1 }}
              whileTap={{ scale: 0.95 }}
              className=" bg-green-700 px-3 py-2 rounded-xl cursor-pointer hover:bg-green-600"
            >
              <div className="flex items-center gap-3 text-white font-semibold">
                <img className="w-[17px]" src={plus} alt="" />
                Add Widgets
              </div>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
