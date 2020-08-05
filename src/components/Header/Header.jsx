import React, { Component } from 'react'

class Header extends Component {
  
  render() {
    if (this.props.data) {
      var name = this.props.data.name
      var occupation = this.props.data.occupation
      console.log(name)
    }
    return (
      <div>
        <h1 id='namn'>Hello, I'm {name}.</h1>
        <h3>{occupation}</h3>
      </div>
    )
  }
}

export default Header
