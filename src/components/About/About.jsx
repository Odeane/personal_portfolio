import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

class About extends Component {
  


  render() {

    if (this.props.data) {
      var bio = this.props.data.bio
     
    }

    
    return (
      <div id='about'>
        <h1 id='about-head'>About</h1>
        <Container>
          <row>
            <Image src={require('./images/avatar2.jpeg')} alt='avatar' rounded />
          </row> 
        </Container>
       
        <p>{bio}</p>
      </div>
    );
  }
}

export default About;




