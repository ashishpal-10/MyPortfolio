import React from 'react'

import Navbar from './Components/Navbar/Navbar.jsx'
import Hero from './Components/Hero/Hero.jsx'
import About from './Components/About/About.jsx'
import Skills from './Components/Skills/Skills.jsx'
import Projects from './Components/Project/Projects.jsx'
import Contact from './Components/contact/Contact.jsx'
import Footer from './Components/Footer/Footer.jsx'



const App = () => {


  return (
    <div>

      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>

      <Contact/>
      <Footer/>
    </div>
    // <div className='main flex items-center max-w-[1000px] m-0-auto  justify-center flex-col'></div>
  )
}

export default App