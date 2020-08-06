import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import './Header.style.scss'

class Header extends Component {
  
  render() {
    if (this.props.data) {
      var name = this.props.data.name
      var occupation = this.props.data.occupation
      console.log(name)
    }
    return (
      <header>
        <div className="row banner">
          <div className="banner-text">
            <Container>
              <h1 className="headline">Hello, I'm {name}.</h1>
              <p id='occu'>{occupation}</p>
              <p>
                <Button variant="primary">VIEW PROJECTS</Button>
              </p>
            </Container>
          </div>
        </div>
      </header>
      
    )
  }
}

export default Header
