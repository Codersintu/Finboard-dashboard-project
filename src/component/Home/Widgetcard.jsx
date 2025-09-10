import React from 'react'
import cancel from "../../assets/cancel.png"
import test from "../../assets/test.png"
import {motion} from "motion/react"
function Widgetcard({setOpen,open}) {
  return (
    <>
    {open===true ?
 <div class="w-full max-w-2xl p-3 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 z-10 absolute top-[250px] left-0 m-auto right-0">
    <form class="space-y-5">
        <div className="flex justify-between items-center">
        <h5 class="text-xl font-medium text-gray-900 dark:text-white">Add New Widget</h5>
        <div onClick={()=>setOpen(false)}  className="hover:bg-gray-200 rounded-full w-[35px]"><img className=' cursor-pointer' src={cancel} alt="" /></div>
        </div>

         <span className='w-full border border-gray-300 flex'></span>

        <div>
            <label for="Name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Widget Name</label>
            <input type="name" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="e.g, Bitcoin Price Tracker " required />
        </div>
        <div>
            <label for="API" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">API Url</label>
            <div className="flex items-center gap-3">
            <input type="API" name="API" id="API" placeholder='https://bitcoin.org/=BTC' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
             <button className='bg-gray-600 py-2 px-4 rounded-xs cursor-pointer'><span className="flex items-center gap-2 text-white"><img className='w-[20px]' src={test} alt="" />Test</span></button>
           </div>
        </div>

          <div>
            <label for="number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Refresh Interval (Seconds)</label>
            <input type="number" name="number" id="number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="30 " required />
        </div>

        <span className='w-full border border-gray-300 flex'></span>
        
        <div className="flex items-center gap-5 float-right">
            <button className='text-[18px cursor-pointer'>cancel</button>
            <motion.button initial={{ scale: 1 }} whileTap={{ scale: 0.95 }}  className='px-4 py-2 cursor-pointer bg-gray-700 text-white font-semibold rounded-xl'>Add Widget</motion.button>
        </div>
    </form>
</div>
:null }
</>
  )
}

export default Widgetcard