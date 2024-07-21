import React, { useState } from 'react'

function Eyes() {
 let [rotate,setRotate] = useState(0);

function useEffect() {
   window.addEventListener("mousemove",(e) => {
       let mouseX = e.clientX;
       let mouseY = e.clientY;

       let delX = mouseX - window.innerWidth/2;
       let delY = mouseY - window.innerHeight/2;

       let angle = Math.atan2(delY,delX)*(180/Math.PI);
       setRotate(angle-180);


   });
}

useEffect();

  return (
    <div className='w-full h-[100vh] overflow-hidden '>
      <div  data-scroll data-scroll-section data-scroll-speed="-.7"  className=' flex justify-center items-center w-full h-full bg-cover  bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")] '>
      <div data-scroll data-scroll-section data-scroll-speed=".3" className=' flex gap-[2vw]  '>
         <div className='flex justify-center items-center w-[15vw] h-[15vw] rounded-full bg-white'>
          <div className=' bg-black w-[60%] flex justify-center items-center h-[60%] rounded-full '>
           <div style={{transform:`rotate(${rotate}deg)`}} className='w-full  h-[2vw]' >
            <div className=' w-[30px] h-[30px] rounded-full bg-white '></div>
            </div>

          </div>
         </div>

         <div className='w-[15vw] flex items-center justify-center h-[15vw] rounded-full bg-white '>
         <div className=' bg-black w-[60%] h-[60%] rounded-full flex justify-center items-center'>
         <div style={{transform:`rotate(${rotate}deg)`}} className='w-full  h-[2vw]  ' >
            <div className=' w-[30px] h-[30px] rounded-full bg-white '></div>
            </div>

          </div>
         </div>

      </div>

      </div>
 </div>
  )
}

export default Eyes
