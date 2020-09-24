import React from 'react'
import Container from 'react-bootstrap/Container'
import './Header.style.css'
// import { Link } from 'react-router-dom'


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
    <div>
      <>
        <div className="head">
          <header>
            <div className="row banner">
              <div className="banner-text">
                <Container>
                  <h1 className="headline">Hi, I'm {name}.</h1>
                  <p id='occu'>{occupation}</p>
                </Container>
                <div className="social">
                  <i onClick={()=> window.open(github)} className="fa fa-github" aria-hidden="true"/>
                  <i onClick={() => window.open(linkedin)}  className="fa fa-linkedin" aria-hidden="true"/>
                  <i onClick={() => window.open(instagram)} className="fa fa-instagram" aria-hidden="true"/>
                  <i onClick={() => window.open(instagram)} className="fa fa-facebook" aria-hidden="true"/>
                </div>
              </div>
            </div>
          </header>
          <section>
          </section>
        </div>
      </>
    </div>
  )
}

export default Header


