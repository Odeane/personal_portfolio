import React, { Component } from 'react'
import Navi from '../components/nav/Nav'
import Header from '../components/Header/Header'
import axios from 'axios'


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
        <Header data={this.state.resumeData.main}/>
      </div>
    );
  }
}


export default HomePage;
