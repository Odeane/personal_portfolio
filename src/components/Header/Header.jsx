import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

class Header extends Component {
  
  render() {
    if (this.props.data) {
      var name = this.props.data.name
      var occupation = this.props.data.occupation
      console.log(name)
    }
    return (
      <div className="container" id="home-container">
        <div className="jumbotron text-center text-white">
          
            <Container>

              <h1 id='namn'>Hello, I'm {name}.</h1>
              <p>{occupation}</p>
              <p>
                <Button variant="primary">VEIW PROJECTS</Button>
              </p>
            </Container>

         
        </div>


        

      </div>
    )
  }
}

export default Header
