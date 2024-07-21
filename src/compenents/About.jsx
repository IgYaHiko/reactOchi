import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className='w-full pt-[7vw]  bg-[#CDEA68] rounded-t-[3rem] ' >
        <div className='px-[3vw] w-[85%]'>
        <h1 className='font-[#222] text-[3.5vw] font-[400]  leading-[3.4vw] tracking-tight '>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
        </div>
        <div className="div w-full flex justify-between border-t-[.1vw] border-[#222] mt-[3vw] py-[3vw] px-[3vw]">
             <div className="ldiv">
                <h1 className='text-[3.5vw]'>Our approach:</h1>
               <div className="btn text-[1.1vw] mt-[.8vw] rounded-full flex justify-between text-[white] w-[60%] bg-[#000] flex py-[.8vw] px-[1.5vw]">
               <button className=''>READ MORE</button>
               <span className='bg-white text-[#222] w-[2.4vw] h-[2.4vw] rounded-full flex items-center justify-center'><GoArrowUpRight/></span> 
               </div>
             </div>
             <div className="rdiv img w-[50%] overflow-hidden rounded-[1rem]">
             <img className='w-full h-[100%] object-cover' src="https://wallpaperbat.com/img/144430-japanese-city-wallpaper-top-free-japanese-city-background.jpg"/>
             </div>
        </div>
    </div>
  )
}

export default About
