  import React from 'react'
  import Navbar from './compenents/Navbar'
  import Land from './compenents/Land'
  import Marqee from './compenents/Marqee'
  import About from './compenents/About'
  import Eyes from './compenents/Eyes'
  import Featured from './compenents/Featured'
  import Boxes from './compenents/Boxes'
  import Ready from './compenents/Ready'
  import Footer from './compenents/Footer'
  import LocomotiveScroll from 'locomotive-scroll';


  function App() {
    
    const locomotiveScroll = new LocomotiveScroll();
    
    
    return (
      <div  className='w-full bg-[#F1F1F1]  text-[#212121] '>
        <Navbar/>
        <Land/>
        <Marqee/>
        <About/>
        <Eyes/>
        <Featured/>
        <Boxes/>
        <Ready/>
        <Footer/>
      </div>
    )
  }

  export default App
