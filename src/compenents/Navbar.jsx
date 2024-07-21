import React from 'react'

function Navbar() {
  return (
    <div className=' w-full px-[5vw] py-[1.3vw] text-[1vw] flex justify-between items-center' >
     <div className="navleft">
        <h1 className=' font-[Tegar] text-[2vw] text-[black]'>Znx</h1>
     </div>
     <div className="navright flex gap-[3vw] text-md text-[black]">
        {["Services","Our Work","About Us","Insights", "Contact   +"].map((items, index) => (
            <a href='#' key={index}  className={`${index === 4 && "ml-[15vw] "}`}>{items}</a>
        ))}
     </div>
    </div>
  )
}

export default Navbar
