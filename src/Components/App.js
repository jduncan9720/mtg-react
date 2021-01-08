import React, {Component} from 'react'
import Navbar from "./Navbar"
import Carousel from './Carousel'


class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <Carousel />
      </div>
    )
  }
}

export default App