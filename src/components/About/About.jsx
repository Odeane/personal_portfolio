import React from 'react'
import './About.style.css'
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import BrightnessAutoIcon from '@material-ui/icons/BrightnessAuto';
import BuildIcon from '@material-ui/icons/Build';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';


function About({ about }) {
  let bio;

  if (about) {
    bio = about.bio
  }

  return (
    <div id='about'>
      <h1 id='about-head'>About</h1>
      <div className="decoyimg">
        Image Placeholder
        </div>
      <div className="bio">
        <p>{bio}</p>
        <p>Sed porttitor lectus nibh. Sed porttitor lectus nibh. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. <br></br>
        </p>
      </div>
      <div className="skills">
        <h3>Soft Skills</h3>

        <div className="softIcons">
          <div className="softIcon">
            <FitnessCenterIcon />
            <h6 className='skillFont'>Strength</h6>
          </div>
          <div className="softIcon">
            <BrightnessAutoIcon />
            <h6 className='skillFont'>Agile</h6>
          </div>
          <div className="softIcon">
            <BuildIcon />
            <h6 className='skillFont'>Test Driven</h6>
          </div>
          <div className="softIcon">
            <EmojiPeopleIcon />
            <h6 className='skillFont'>Motivated</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About





