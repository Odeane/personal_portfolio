import React, { Component } from 'react';
import './About.style.scss'

class About extends Component {
  


  render() {

    if (this.props.data) {
      var bio = this.props.data.bio
     
    }

    
    return (
      <div id='about'>
        <h1 id='about-head'>About</h1>
        <div className="decoyimg">
        Image Placeholder
        </div>

        {/*<div className="avatar_image">
          <img src={require('./images/avatar.jpeg')} />
    </div>*/}
        
        <div className="bio">
          <p>{bio}</p>
        </div>
        
      </div>
    );
  }
}

export default About;




