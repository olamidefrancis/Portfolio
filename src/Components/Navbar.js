
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'
import im from '../Assets/icons8-linkedin-96.png'
import im2 from '../Assets/icons8-github-96.png'



class Navbar extends Component{
  render(){
    return(
      <div className='main_nav'>
            <div className='my_name'>
                <h2>Olamide</h2>
            </div>

            <div className='my_socials'>
                <Link className='tolink' to='https://www.linkedin.com/in/olamide-ojo-francis/'>
                    <img  className='im' src={im} alt='lin'/>
                </Link>  

                <Link className='tolink' to='https://github.com/olamidefrancis'>
                    <img  className='im' src={im2} alt='git'/>
                </Link> 

            </div>
      </div>
    )
  }
}
export default Navbar
