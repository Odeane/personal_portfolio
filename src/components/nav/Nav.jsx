import React, { useState, useEffect } from 'react'
import './nav.style.css'
import { Menu, Segment } from 'semantic-ui-react'

function Navi() {

  const [show, handleShow] = useState(false)

  const [activeItem, setActiveItem] = useState('HOME')

  const handleItemClick = (e, { name }) => setActiveItem(name)


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
      <Segment inverted>
        <Menu inverted pointing>
          <Menu.Item
            className='menu'
            name='HOME'
            active={activeItem === 'HOME'}
            onClick={handleItemClick}
          />
          <Menu.Item
            className='menu'
            name='ABOUT'
            active={activeItem === 'ABOUT'}
            onClick={handleItemClick}
          />
          <Menu.Item
            className='menu'
            name='PROJECTS'
            active={activeItem === 'PROJECTS'}
            onClick={handleItemClick}
          />
          <Menu.Item
            className='menu'
            name='RESUME'
            active={activeItem === 'RESUME'}
            onClick={handleItemClick}
          />
          <Menu.Item
            className='menu'
            name='CONTACT'
            active={activeItem === 'CONTACT'}
            onClick={handleItemClick}
          />
        </Menu>
      </Segment>
    </div>

  )
}
export default Navi;
