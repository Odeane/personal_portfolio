import React, { useEffect, useState } from 'react'
// import './About.style.css'
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import BrightnessAutoIcon from '@material-ui/icons/BrightnessAuto';
import BuildIcon from '@material-ui/icons/Build';
import DescriptionIcon from '@material-ui/icons/Description';
import { Image } from 'semantic-ui-react'
import axios from 'axios';
import Chip from '@material-ui/core/Chip';
import '../../sass/main.scss'




function About({ about }) {

  const [tools, setTools] = useState([])

  const getSkills = async () => {
    let res = await axios.get('./ResumeData.json')
    setTools(res.data.main.Tools.technologies)
  }

  useEffect(() => {
    getSkills()
  }, [])

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
      <div className="softIcons__softIcon">
        <FitnessCenterIcon />
        <h6 className='skillFont'>{programmingtitle}</h6>
        <p className='info'>{programmingInfo}</p>
      </div>
      <div className="softIcons__softIcon">
        <BrightnessAutoIcon />
        <h6 className='skillFont'>{agile}</h6>
        <p className='info'>{agileInfo}</p>
      </div>
      <div className="softIcons__softIcon">
        <BuildIcon />
        <h6 className='skillFont'>{tests}</h6>
        <p className='info'>{testsInfo}</p>
      </div>
      <div className="softIcons__softIcon">
        <DescriptionIcon />
        <h6 className='skillFont'>{version}</h6>
        <p className='info'>{versionInfo}</p>
      </div>
    </div>
  )


  return (
    <div className='about'>
      <h1 className='about__header'>ABOUT</h1>
      <div className="about__bio">
        <div className="about__bio__text">
          <p className='about__bio__para'>{bio}</p>
          <div className="skills">
            <h3 className='skills__heading'>SKILLS</h3>
            {aboutData}
          </div>
        </div>
        <Image className='about__bio__avatar' src={avatar} rounded />
      </div>


      <div className="technologies">
        <h3 className='technologies__header'>TECHNOLOGIES</h3>
        <div className="technologies__list">
          {
            tools.map(tool => {
              return <div className='technology'>
                <Chip
                  variant="outlined"
                  size="small"
                  label={tool}
                  clickable
                  color="primary"
                />
              </div>
            })}
        </div>
      </div>
    </div>
  )
}

export default About





