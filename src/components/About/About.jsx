import React, { Component } from 'react';

class About extends Component {
  


  render() {

    if (this.props.data) {
      var bio = this.props.data.bio
     
    }

    
    return (
      <div id='about'>
        <h1 id='about-head'>About</h1>
        <img src={require('./images/avatar.jpeg')}alt='avatar'/>
        <p>{bio}</p>
      </div>
    );
  }
}

export default About;




