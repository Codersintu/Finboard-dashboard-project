import React, { useEffect, useState } from "react";
import cancel from "../../assets/cancel.png";
import test from "../../assets/test.png";
import { motion } from "motion/react";
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from "recoil";
import { widgetAPI, widgetData } from "../../store";
function Widgetcard({ setOpen, open }) {
     const [url, setUrl] = useRecoilState(widgetAPI); // save URL globally
     const [intersec,setIntersec]=useState(30);
    const apiData = useRecoilValueLoadable(widgetData({ url }));
    console.log(apiData)
    const [displayMode, setDisplayMode] = useState(null);
     console.log(url)
   
    const Handletest = (e) => {
    e.preventDefault();
     useEffect(()=>{
        if (!url) return;
    const interval = setInterval(() => {
      setUrl((prev) => prev); // retriggers selector
    }, intersec * 1000);
    return () => clearInterval(interval);
    },[url,intersec])

  };



  return (
     <>
      {open && (
        <div className="w-full max-w-2xl p-3 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 z-10 absolute top-[250px] left-0 m-auto right-0">
          <form className="space-y-5">
            {/* Header */}
            <div className="flex justify-between items-center">
              <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                Add New Widget
              </h5>
              <div
                onClick={() => setOpen(false)}
                className="hover:bg-gray-200 rounded-full w-[35px]"
              >
                <img className="cursor-pointer" src={cancel} alt="close" />
              </div>
            </div>

            <span className="w-full border border-gray-300 flex"></span>

            {/* Widget Name */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Widget Name
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="e.g, Bitcoin Price Tracker"
                required
              />
            </div>

            {/* API URL */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                API Url
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://api..."
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  required
                />
                <button
                  onClick={Handletest}
                  className="bg-gray-600 py-2 px-4 rounded cursor-pointer"
                >
                  <span className="flex items-center gap-2 text-white">
                    <img className="w-[20px]" src={test} alt="" />
                    Test
                  </span>
                </button>
              </div>

              {/* Test Result */}
              {apiData.state === "loading" && (
                <p className="text-yellow-500 mt-2">Testing API...</p>
              )}
              {apiData.state === "hasValue" && (
                <p className="text-green-600 mt-2">
                  ✅ API connection successful!
                </p>
              )}
              { apiData.state === "hasError" && (
                <p className="text-red-600 mt-2">
                  ❌ API connection failed. Check URL.
                </p>
              )}
            </div>

            {/* Refresh Interval */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Refresh Interval (Seconds)
              </label>
              <input
                type="number"
                value={intersec}
                onChange={(e) => setIntersec(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="30"
                required
              />
            </div>

            {/* Display Mode (after successful test) */}
            {apiData.state === "hasValue" && (
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Display Mode
                </label>
                <div className="flex gap-3">
                  {["Card", "Table", "Chart"].map((mode) => (
                    <button
                      type="button"
                      key={mode}
                      onClick={() => setDisplayMode(mode)}
                      className={`px-3 py-1 rounded cursor-pointer ${
                        displayMode === mode
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200 text-black"
                      }`}
                    >
                      {mode}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <span className="w-full border border-gray-300 flex"></span>

            {/* Footer */}
            <div className="flex items-center gap-5 float-right">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-[18px] cursor-pointer"
              >
                Cancel
              </button>
              <motion.button
                initial={{ scale: 1 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-4 py-2 cursor-pointer bg-gray-700 text-white font-semibold rounded-xl"
              >
                Add Widget
              </motion.button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default Widgetcard;
