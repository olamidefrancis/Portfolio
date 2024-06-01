
import React, {Component} from 'react';
import './Intro.css'
import im from '../Assets/ola_dp.jpeg'
import im2 from '../Assets/icons8-email-96.png'




class Intro extends Component{
  render(){
    return(
      <div className='main_intro'>
            <div className='intro1'>
                <div className='intro_img'>
                        <img  className='ola_face' src={im} alt='ola_face'/>
                </div>
                <div className='intro_names'>
                            <h2>My name is Olamide Francis</h2>
                            <h2>Junior Developer</h2>
                            <p className='haven'>@Activehaven</p>
                </div>
            </div>

            <div className='intro2'>
                <div className='phone'>
                        <p>Phone</p>
                        <p>+(44)70424858685</p>
                </div>
                <div className='email'>
                         <p>Drop your Message</p>
                            <div className='emailwith_ic'>
                                <p className='olafran'>olamidefrancis@gmail.com</p>
                                <img className='email_icon' src={im2} alt='email'/>
                            </div>
                </div>

            </div>
      </div>
    )
  }
}
export default Intro
