import React, { Component } from 'react'
import Navi from '../components/nav/Nav'
import Header from '../components/Header/Header'
import axios from 'axios'
import About from '../components/About/About';
import Resume from '../components/Resume/Resume';



class HomePage extends Component {
  constructor() {
    super();

    this.state = {
      resumeData: {}
    }
  }

  getResumeData = async () => {
    const response = await axios.get('./ResumeData.json')
    this.setState({ resumeData: response.data })
    // console.log(response.data.main)
  }

  componentDidMount() {
    this.getResumeData()
  }

  render() {
   

    return (
      <div>
        <Navi />
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Resume/>
      </div>
    );
  }
}


export default HomePage;
