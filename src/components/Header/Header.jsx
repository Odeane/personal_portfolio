import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import './Header.style.scss'

class Header extends Component {
  
  render() {
    if (this.props.data) {
      var name = this.props.data.name
      var occupation = this.props.data.occupation
      var instagram = this.props.data.social.instagram
      var linkedin = this.props.data.social.linkedin
      var github = this.props.data.social.github
      
    }
    return (
      <div className="heads">
        <header>
          <div className="row banner">
            <div className="banner-text">
              <Container>
                <h1 className="headline">Hello, I'm {name}.</h1>
                <p id='occu'>{occupation}</p>
              </Container>
              <div className="social">
                <a href={github}><i class="fa fa-github" aria-hidden="true"></i> </a> 
                <a href={linkedin}><i class="fa fa-linkedin" aria-hidden="true"></i> </a> 
                <a href={instagram}><i class="fa fa-instagram" aria-hidden="true"></i> </a>
                <a href={'placeholder'}><i class="fa fa-facebook" aria-hidden="true"></i> </a>
              </div>              
            </div>
          </div>
        </header>
        <section>
          <div className="down-btn">
            <a id='project-btn' href='#project'><i id='arrows' className="fa fa-angle-double-down" aria-hidden="true"></i> </a>
          </div>
        </section>
      </div>
      
      
    )
  }
}

export default Header
