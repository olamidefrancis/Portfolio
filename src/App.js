import React, {Component} from 'react';
import Navbar from './Components/Navbar';
import Intro from './Components/Intro';
import Project from './Components/Project'


class App extends Component{
  render(){
    return(
      <div className='app_main'>
          <Navbar/>
          <Intro/>
          <Project/>
      </div>
    )
  }
}
export default App
