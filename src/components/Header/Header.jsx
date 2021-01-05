import React from 'react'
import Container from 'react-bootstrap/Container'
// import './Header.style.css'


function Header({ header }) {

  let name, occupation, instagram, linkedin, github

  if (header) {
    name = header.name
    occupation = header.occupation
    instagram = header.social.instagram
    linkedin = header.social.linkedin
    github = header.social.github
  }

  return (
    <header>
      <div className="banner">
          <div>
            <h1 className="banner__headline">Hi, I'm {name}.</h1>
            <p id='occu'>{occupation}</p>
          </div>
          <div className="social">
            <i onClick={() => window.open(github)} className="fa fa-github" aria-hidden="true" />
            <i onClick={() => window.open(linkedin)} className="fa fa-linkedin" aria-hidden="true" />
            <i onClick={() => window.open(instagram)} className="fa fa-instagram" aria-hidden="true" />
            <i onClick={() => window.open(instagram)} className="fa fa-facebook" aria-hidden="true" />
          </div>
      </div>
    </header>
  )
}

export default Header


