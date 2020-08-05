import React, { Component } from 'react'
import Nav from '../components/nav/Nav'
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
    console.log(response.data)
  }

  componentDidMount() {
    this.getResumeData()
  }



  render() {
    return (
      <div>
        <Nav />
      </div>
    );
  }


}


export default HomePage;
