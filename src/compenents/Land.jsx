import { motion } from 'framer-motion';


import React from 'react'
import { GoArrowUpRight } from "react-icons/go";


function Land() {

  return (  
    
    <div data-scroll data-scroll-section data-scroll-speed="-.5"  className='w-full h-screen bg-[#F1F1F1] py-[3vw]'>
      <div className="text mt-[1vw] px-[5vw]">
      {["We Create","Eye Opening","Presentation"].map((items, index) => {
        return <div className="masker">
          <div className='w-fit flex gap-[1vw] items-center'> 
          { index === 1 && ( <motion.div initial={{width: 0}} animate={{ width: "10vw"}} transition={{ease : [0.25, 0.1, 0.25, 1.5],duration: 1 }} className='w-[10vw] relative top-[6px] overflow-hidden h-[6vw] rounded-md'> 
          <img className='w-[100%] h-[100%] object-cover ' src="https://images7.alphacoders.com/133/1339442.png" alt="" /></motion.div> ) }
          <h1 className='text-[8vw] uppercase font-["Tegar"] leading-[7vw] font-[500] '>{items}</h1>
          </div>
          </div>
      })}
      </div>
      <div className='border-t-[1px] border-zinc-700 mt-[10vw] flex justify-between py-[1vw] px-[4vw] '>
        <div className="left flex text-[1vw] ">
          {["For public and private companies","from the first pitch to IOP"].map((items, index) =>(
            <h3 key={index} className={`${index === 1 && "ml-[32vw]" } uppercase `} >{items} </h3>
          ))}
        </div>
        <div className="right flex items-center gap-[1vw]">
          <button className='uppercase px-[2vw] py-[.4vw] rounded-full text-[1vw] bg-[#F1F1F1] border-[.1vw] border-[#222] '>start the project</button>
          <div className="flex justify-center items-center icon w-[2.4vw] h-[2.4vw] rounded-full border-[.1vw] border-[#222] ">
             <GoArrowUpRight />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Land

