import React from 'react'
import candle from "../../assets/candle.png";
import { useRecoilValue } from 'recoil';
import { widgetAPI } from '../../store';

function Home() {
  const apiData=useRecoilValue(widgetAPI)
  console.log("hello",apiData)
  return (
    <div className='w-[100vw] relative z-0 h-[1000px] bg-gray-600 flex justify-center'>
     <div className="flex flex-col items-center gap-5 mt-[60px]">
        <div className="bg-gray-800 p-4 rounded-full">
        <img className='w-[25px]' src={candle} alt="" />
        </div>
        <div className=" flex flex-col items-center gap-2">
            <h1 className='text-3xl text-white font-semibold'>Build Your Finance Dashboard</h1>
            <p className='text-[15px] text-gray-400 font-semibold'>Create custom widgets by connecting to any finance API.<br/> Track real time data !</p>
        </div>
      </div>
    </div>
  )
}

export default Home