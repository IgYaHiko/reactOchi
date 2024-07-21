import { easeIn, motion, useAnimation, useScroll } from 'framer-motion';
import React, { useState } from 'react'
import { GoArrowUpRight } from "react-icons/go";

function Featured() {
 const cards = [useAnimation() , useAnimation()]

 const hoverIn = (index) => {
  cards[index].start({y: "0"});  
 };
 const hoverOut = (index) => {
  cards[index].start({y: "100%"});  
 };

  
  return (
    <div className='w-full  bg-[#F1F1F1] py-[2vw]'>
     <div className='pt-[3vw] pb-[2vw] border-b-[.1vw] border-zinc-400 px-[3vw] w-full'><h1 className='text-[#222] text-[4vw] font-[400]'>Featured Projects</h1></div>
    <div className=' cards w-full px-[3vw] py-[3.5vw] flex gap-[1vw] '>
     <div className='w-full flex flex-col'>
       <div className='flex gap-[1vw] items-center'>
       <div className='w-5 h-5   bg-zinc-900 rounded-full'></div>
       <h1 className='text-zinc-700 text-[1vw]'>FYDE</h1>
       </div>
       
       <div className='relative'>
        
       <h1 class="absolute overflow-hidden font-[700] z-[9]  -right-0 translate-y-[170%] translate-x-1/2 text-[#CDEA68] text-[5vw]">
        {"FYDE".split('').map((items,index) => <motion.span 
          initial={{y: "100%"}}
          animate={cards[1]}
          transition={{ease:[0.25, 0.1, 0.25, 1.5],delay: index*.1}}
        className='inline-block'>{items}</motion.span>)}
       </h1>
       </div>
       <motion.div 
     onHoverStart={() => hoverIn(1)}
     onHoverEnd={() => hoverOut(1)}
       className="mt-[1rem]  rounded-[1rem] cardCon w-[100%] h-[70vh] overflow-hidden transform transition duration-500 hover:scale-[.9] ">
          
      
       
        <div className='transform transition duration-500 hover:scale-[150%] w-full rounded-[1rem] overflow-hidden h-full '><img  className='hover-scale-[.5] w-full h-[100%] object-cover  ' src="https://wallpaper.dog/large/5543998.jpg" alt="" /></div>
     </motion.div>
     <div className='flex mt-[1.5vw] gap-4'>
      {["audit","sales deck","slides designs","copywrite"].map((items,index) =>(
        <a className='uppercase py-[.4vw] px-[1.5vw] bg-[#F1F1F1] border-[1px] border-[#222] rounded-full font-[500]  ' href="#">{items}</a>
      ))}
     </div>
     </div>
       

     <div className='w-full flex flex-col'>
       <div className='flex gap-[1vw] items-center'>
       <div className='w-5 h-5   bg-zinc-900 rounded-full'></div>
       <h1 className='text-zinc-700 text-[1vw]'>VISE</h1>
       </div>
       <div className='relative'>
       <h1 class="absolute font-[700] z-[9] overflow-hidden -left-[215px] translate-y-[170%] translate-x-1/2 text-[#CDEA68] text-[5vw]">
        {"VISE".split('').map((items,index) => <motion.span 
          initial={{y: "100%"}}
          animate={cards[0]}
          transition={{ease: [0.25, 0.1, 0.25, 1.5], delay: index*.1}}
        className='inline-block'>{items}</motion.span>)}
       </h1>
       </div>
     <motion.div 
     onHoverStart={() => hoverIn(0)}
     onHoverEnd={() => hoverOut(0)}
     className=" mt-[1vw] rounded-[1rem] cardCon w-[100%] h-[70vh] overflow-hidden transform transition duration-500 hover:scale-[.9]">
        <div className='transform transition duration-500 hover:scale-[150%] card w-full h-full rounded-[1rem] overflow-hidden '>
        <img className='w-full h-[100%] object-cover' src="https://wallpaper.dog/large/962642.jpg" alt="" />
        </div>
     </motion.div>
     <div className='flex mt-[1.5vw] gap-4'>
      {["agency","company presentation"].map((items,index) =>(
        <a className='uppercase py-[.4vw] px-[1.5vw] bg-[#F1F1F1] border-[1px] border-[#222] rounded-full font-[500]  ' href="#">{items}</a>
      ))}
     </div>
     </div>
 </div>
 <div className='w-full flex justify-center items-center'>
   <button className='flex items-center justify-center gap-[2vw] bg-[#222] py-[1vw] px-[1.5vw] text-white text-[1vw] rounded-full hover:bg-black'>VIEW ALL CASE STUDIES 
     <span className='bg-[#ddd] rounded-full w-[50px] h-[50px] text-black flex items-center justify-center' ><GoArrowUpRight/> </span>
    </button>
 </div>

    </div>
  )
}

export default Featured
