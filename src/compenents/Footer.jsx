import React from 'react'

function Footer() {
  return (
    <div   data-scroll data-scroll-section data-scrollu-speed=".5" className=' rounded-t-[2rem] w-full flex flex-col gap-[27vw] px-[4vw] pt-[1vw] pb-[1vw] bg-[#F1F1F1]'>
        <div className='flex'>
        <div className='w-[50%]'>
             {["eye-","opening"].map((items,index) => (
                <h1 key={index} className='text-[6vw] font-bold uppercase leading-none'>{items}</h1>
             ))}
        </div>
        <div className='w-[50%]'>
            <h1  className='text-[6vw] font-bold uppercase leading-none'>Presentation</h1>
        </div>
        </div>
       <div className='foot flex justify-between items-center'>
       <h1 className=' font-[Tegar] text-[2vw] text-[black]'>Znx</h1>
         <h1 className='text-[1vw] text-zinc-400'>&copy; ZNX design 2024 Legal Terms</h1>
         <h1 className='text-[1vw] text-zinc-400'>Website by Obys</h1>
       </div>
        
    </div>
  )
}

export default Footer
