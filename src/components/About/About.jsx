import React from 'react'
import './About.style.css'
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import BrightnessAutoIcon from '@material-ui/icons/BrightnessAuto';
import BuildIcon from '@material-ui/icons/Build';
import DescriptionIcon from '@material-ui/icons/Description';
import { Image  } from 'semantic-ui-react'



function About({ about }) {
  let bio,
    avatar,
    programmingtitle,
    programmingInfo,
    agile, agileInfo,
    testsInfo,
    tests,
    version,
    versionInfo;

  if (about) {
    bio = about.bio
    avatar = about.avatar
    programmingtitle = about.skills.programming.title
    programmingInfo = about.skills.programming.info
    agile = about.skills.agile.title
    agileInfo = about.skills.agile.info
    tests = about.skills.tests.title
    testsInfo = about.skills.tests.info
    version = about.skills.versioncontrol.title
    versionInfo = about.skills.versioncontrol.info

  }

  let aboutData = (
    <div className="softIcons">
      <div className="softIcon">
        <FitnessCenterIcon />
        <h6 className='skillFont'>{programmingtitle}</h6>
        <p className='info'>{programmingInfo}</p>
      </div>
      <div className="softIcon">
        <BrightnessAutoIcon />
        <h6 className='skillFont'>{agile}</h6>
        <p className='info'>{agileInfo}</p>
      </div>
      <div className="softIcon">
      <BuildIcon />
        <h6 className='skillFont'>{tests}</h6>
        <p className='info'>{testsInfo}</p>
      </div>
      <div className="softIcon">
        <DescriptionIcon />
        <h6 className='skillFont'>{version}</h6>
        <p className='info'>{versionInfo}</p>
      </div>
    </div>
  ) 

  return (
    <div id='about'>
      <h1 id='about-head'>ABOUT</h1>
      <div>
        <Image id='avatar' src={avatar} rounded />
        </div>
      <div className="bio">
        <p>{bio}</p>
      </div>
      <div className="skills">
        <h3>SKILLS</h3>
        <br/>
        {aboutData} 
      </div>
    </div>
  )
}

export default About





