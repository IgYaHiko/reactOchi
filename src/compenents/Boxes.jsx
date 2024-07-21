import React from 'react'

function Boxes() {
  return (
    <div  className='w-full bg-[#F1F1F1] text-white px-[3vw] flex items-center justify-center gap-[1.5vw] '>
      <div className="container w-[50%] bg-red-500 h-[50vh] rounded-xl overflow-hidden">
         <div className='relative bg-[#004D43] w-full h-full flex justify-center items-center '>
            <h1 className='font-["Tegar"] text-[5vw] text-[#CDEA68] '>ZNX</h1>
            <button className='px-[1vw] text-center py-[.3vw] bg-[#004D43] border-[.1vw] border-[#CDEA68] rounded-full text-[1vw] text-[#CDEA68] left-7 bottom-6 absolute'>&copy;2019-2024</button>
         </div>
      </div>

      <div className="container w-[50%] flex gap-[1.5vw] h-[50vh] rounded-xl overflow-hidden">
         <div className="relative box w-[50%] flex justify-center items-center h-full bg-[#212121] rounded-xl">
             <img className='w-[7vw]' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
             <button className='px-[1vw] text-center py-[.3vw] bg-[#212121] border-[.1vw] border-[#ddd] rounded-full text-[1vw] text-[#ddd] left-7 bottom-6 absolute'>RATING 5.0 ON CLUTCH</button>
         </div>
         <div className="relative box w-[50%] h-full bg-[#212121] rounded-xl flex justify-center items-center">
            <img className='w-[8vw]' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
            <button className='px-[1vw] text-center py-[.3vw] bg-[#212121] border-[.1vw] border-[#ddd] rounded-full text-[1vw] text-[#ddd] left-7 bottom-6 absolute'>BUSINESS BOOTCAMP ALUMNI</button>
         </div>

     </div>


    </div>
  )
}

export default Boxes