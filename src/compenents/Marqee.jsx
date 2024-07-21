import { motion } from 'framer-motion'
import React from 'react'

function Marqee() {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className='w-full py-[4vw] bg-[#004D43] rounded-t-[3rem]'>
     <div className="text items-center  flex  border-t-[.1vw] border-b-[.1vw] border-[#F1F1F1] overflow-hidden whitespace-nowrap">
        {["You imagine We Create","You imagine We Create"].map((items,index) => (
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease:  "linear", repeat: Infinity, duration: 25}}   className='font-[Poppins] text-[22vw] text-[#F1F1F1] leading-none tracking-tight uppercase ' key={index} >{items}</motion.h1>
        ))}
     </div>
    </div>
  )
}

export default Marqee
