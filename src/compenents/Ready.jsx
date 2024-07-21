import React, { useState } from 'react'

export default function Ready() {
    let [r,s] = useState(0);

const mouseRotate = () => {
    window.addEventListener("mousemove",(e) => {
        let moveX = e.clientX;
        let moveY = e.clientY;

        let diffX = moveX - window.innerWidth/2;
        let diffY = moveY - window.innerHeight/2;

        let angle = Math.atan2(diffY,diffX)*(180/Math.PI);
        s(angle-180);


    });
}
mouseRotate();

  return (
    <div   data-scroll data-scroll-section data-scroll-speed=".1"  className='relative w-full py-[5vw] bg-[#CDEA68] flex justify-center items-center rounded-t-[2rem] '>
     
     <div  data-scroll data-scroll-section data-scroll-speed=".3" className='flex gap-[2vw]  overflow-hidden  h-[30vh] absolute'>
        <div className='h-full w-[14vw] bg-white flex justify-center items-center rounded-full overflow-hidden'>
            <div className='flex justify-center items-center w-[60%] h-[60%] rounded-full bg-black'>
                <div style={{transform:`rotate(${r}deg)`}} className='w-full '>
                <div className='w-5 h-5 bg-white rounded-full'></div>
                </div>
            </div>
        </div>
        <div className='h-full flex justify-center items-center w-[15vw] bg-white rounded-full overflow-hidden'>
        <div className='w-[60%] h-[60%] rounded-full bg-black flex justify-center items-center'>
        <div style={{transform:`rotate(${r}deg)`}} className='w-full '>
            <div className='w-5 h-5 bg-white rounded-full'></div>
        </div>
        </div>
        </div>
     </div>
    
    <div className='flex flex-col items-center leading-none'>
        <h1 className='text-bold text-[14vw] tracking-tighter'>READY</h1>
        <h1 className='text-bold text-[14vw] tracking-tighter' >TO START</h1>
        <h1 className='text-bold text-[14vw] tracking-tighter'>THE PROJECT</h1>
    </div>
    </div>
  )
}
