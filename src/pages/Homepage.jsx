import React, {useState, useEffect} from 'react'
import Navi from '../components/nav/Nav'
import Header from '../components/Header/Header'
import axios from 'axios'
import About from '../components/About/About';
import Resume from '../components/Resume/Resume';
import Project from '../components/Projects/Projects'

function Homepage() {

  const [resumeData, setResumeData] = useState({})

  const getResumeData = async () => {
    const response = await axios.get('./ResumeData.json')
    setResumeData(response.data)
    // console.log(response.data.main)
  }

  useEffect(() => {
   getResumeData()
  }, [])

  return (
    <div>
      <Navi />
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
      <Project />
      <Resume />
    </div>
  )
}

export default Homepage
