import React, { Component } from 'react'
import Navbar from './Components/navbar'
import Utama from './Components/utama'
import Footer from './Components/footer'


export class App extends Component{
  render(){
    return(
      <div>
        <Navbar />
        <Utama />
        <Footer />
      </div>
    )
  }
}

export default App;