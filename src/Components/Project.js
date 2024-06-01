
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Project.css'
import imgp from '../Assets/icons8-project-status-96.png'




class Project extends Component{
  render(){
    return(
      <div>
            <div className='project_name'>
                    <h2> Projects</h2>
                    <img src={imgp} alt='project_img' className='project_img'/>
            </div>

            <div className='project_container'>
                    <div className='project_one'>
                          <div className='activehaven'>
                                <div className='title'>
                                         <p>Activehaven</p>   
                                </div>

                                 <div className='link'> 
                                    <Link className='tohaven' to='https://www.activehaven.co.uk/'>Activehaven.co.uk
                                    </Link>
                                 </div>
                                              
                                 <div className='description'>
                                                
                                        <p className='my_dis'>Description</p>
                                                
                                        <div className='dis_words'>
                                                
                                             <p>This project is for a care company in the United Kingdom.</p>
                                             <p>This website allows people to seek support via the (Apply for Support page) with a support form.</p>
                                             <p>Also, it tracks employee activities through the(staff page) with a clock-in, clock-out, and submit report button.</p>
                                                
                                        </div>
                                 </div>
      
                           </div>


                           <div className='smart_brain'>
                                <div className='title'>
                                         <p>Smart_Brain</p>   
                                </div>

                                 <div className='link'> 
                                    <Link className='tohaven' to='https://github.com/olamidefrancis/Smart-Brain'>Smart_Brain
                                    </Link>
                                 </div>
                                              
                                 <div className='description'>
                                                
                                        <p className='my_dis'>Description</p>
                                                
                                        <div className='dis_words'>
                                                
                                        <p> An image recognition API that uses a bounding box to detect the presence and location of human faces.</p>
                                                                        
                                        </div>
                                 </div>
      
                           </div>

                    </div>

            </div>
            
      </div>
    )
  }
}
export default Project
