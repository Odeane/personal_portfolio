import React, {useState, useEffect} from 'react'
import Navi from '../components/nav/Nav'
import Header from '../components/Header/Header'
import axios from 'axios'
import About from '../components/About/About';
import Resume from '../components/Resume/Resume';
import Project from '../components/Projects/Projects'
import Contact from '../components/Footer/Contact';

function Homepage() {

  const [resumeData, setResumeData] = useState({})

  const getResumeData = async () => {
    const response = await axios.get('./ResumeData.json')
    setResumeData(response.data)
  }

  useEffect(() => {
   getResumeData()
  }, [])



  return (
    <div>
      <Navi />
      <Header header={resumeData.main} />
      <About about={resumeData.main} />
      <Project data={resumeData.main}/>
      <Resume cv={resumeData.main} />
      <Contact contact={resumeData.main}/>
    </div>
  )
}

export default Homepage
