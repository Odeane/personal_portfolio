import React, { useState, useEffect } from 'react'
import './nav.style.css'
import { Link, animateScroll as scroll} from 'react-scroll'



function Navi() {

  const [show, handleShow] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 115) {
        handleShow(true);
      } else handleShow(false);
    })
    return () => {
      window.removeEventListener('scroll')
    }
  }, [])



  return (

    <div className={`nav ${show && 'nav__black'}`}>
      
      <div className="menu">
      <Link smooth={true} duration={1000} onClick={()=> scroll.scrollToTop() }>HOME</Link>
      </div>
      <div className="menu">
      <Link smooth={true} duration={1000} to={'about'}>ABOUT</Link>
      </div>
      <div className="menu">
      <Link smooth={true} duration={1000} to={'project'}>PROJECTS</Link>
      </div>
      <div className="menu">
      <Link smooth={true} duration={1000} to={'heading__text'}>RESUME</Link>
      </div>
      <div className="menu">
      <Link smooth={true} duration={1000} to={'contact__details'}>CONTACT</Link>
      </div>



    </div>

  )
}
export default Navi;
