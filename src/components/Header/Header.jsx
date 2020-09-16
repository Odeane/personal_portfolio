import React from 'react'
import Container from 'react-bootstrap/Container'
import './Header.style.css'
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';


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
                  <a href={github}><i className="fa fa-github" aria-hidden="true"></i></a>
                  <a href={linkedin}><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                  <a href={instagram}><i className="fa fa-instagram" aria-hidden="true"></i></a>
                  <a href={'placeholder'}><i className="fa fa-facebook" aria-hidden="true"></i></a>
                </div>
              </div>
            </div>
          </header>
          <section>
          </section>
         { /* <div className="down-btn">
            <a href='#project'><ArrowDropDownCircleIcon id='project-btn' /></a>
  </div>*/}
        </div>
      </>
    </div>
  )
}

export default Header


