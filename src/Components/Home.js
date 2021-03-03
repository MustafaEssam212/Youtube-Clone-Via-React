 import React, { Component } from 'react';
 import './Home.css';
 import image1 from './images/1.jpg'
 import image2 from './images/2.jpg'
 import image3 from './images/3.jpg'
 import image4 from './images/4.jpg'
 import image5 from './images/5.jpg'
 import flower from './images/flower.jpg'
 import {Helmet} from "react-helmet";
import {Link} from 'react-router-dom'


 
 class Home extends Component{
  componentDidMount(){
    document.getElementById('togg').style.display = 'none';
    var x =  document.getElementById('sidss');
    x.classList.remove('soper')
    var toog = document.getElementById('not');
    var tog = document.getElementById('togg');
    toog.classList.remove('maintog') 
  }
 
   render(){
  const title = 'Youtube';

  
    return(
      
    <div>
                  <Helmet>
            <title>{title}</title>
            </Helmet>
                        <div className="content" id="content">

                            <div className="video">
                             
                            <Link to="./Video" className="thumbnail"><img src={image1}></img></Link> 
                                    
                                    <div className="title">
                                   
                                      <Link href="#"><img src={flower}></img></Link>
                                      <Link className="name" to="./video" title="Mohamed Mounir - El bo3d Nar / محمد منير - البعد نار">Mohamed Mounir - El bo3d Nar / محمد منير - البعد نار</Link>

                                    </div>

                                    <a href="#" className="channel">mustafa's channel <span>mustafa's channel</span></a>
                                
                                
                             </div>


                                  <div className="video">

                                  <a href="#"><img src={image2}></img></a> 
                                    
                                    <div className="title">
                                   
                                      <a href="#"><img src={flower}></img></a>
                                      <a href="#" className="name" title="Can we protect nature by giving it legal rights?">Can we protect nature by giving it legal rights?</a>

                                    </div>

                                    <a href="#" className="channel">abdallah's channel<span>abdallah's channel</span></a>
                                
                                
                                   </div>



                                  <div className="video">

                                  <a href="#"><img src={image3}></img></a> 
                                    
                                    <div className="title">
                                   
                                      <a href="#"><img src={flower}></img></a>
                                      <a href="#" className="name" title="What happen when you start enjoy being alone?">What happen when you start enjoy being alone?</a>

                                    </div>

                                    <a href="#" className="channel">ahmed's channel<span>ahmed's channel</span></a>
                                
                                
                                  </div>



                                  <div className="video">

                                  <a href="#"><img src={image4}></img></a> 
                                    
                                    <div className="title">
                                   
                                      <a href="#"><img src={flower}></img></a>
                                      <a href="#" className="name" title="It is the time for nature: World Environment Day 2020">It is the time for nature: World Environment Day 2020</a>

                                    </div>

                                    <a href="#" className="channel">mohamed's channel<span>mohamed's channel</span></a>
                                
                                
                                  </div>




                                  <div className="video">

                                  <a href="#"><img src={image5}></img></a> 
                                    
                                    <div className="title">
                                   
                                      <a href="#"><img src={flower}></img></a>
                                      <a href="#" className="name" title="Time for Nature: Is a global public health crisis">Time for Nature: Is a global public health crisis</a>

                                    </div>

                                    <a href="#" className="channel">khaled's channel<span>khaled's channel</span></a>
                                
                                
                                  </div>




                                                                  <div className="video">

                                    <a href="#"><img src={image1}></img></a> 
                                    
                                    <div className="title">
                                   
                                      <a href="#"><img src={flower}></img></a>
                                      <a className="name" href="#" title="Mohamed Mounir - El bo3d Nar / محمد منير - البعد نار">Mohamed Mounir - El bo3d Nar / محمد منير - البعد نار</a>
                                        
                                    </div>

                                    <a href="#" className="channel">mustafa's channel<span>mustafa's channel</span></a>
                                
                                
                             </div>


                                  <div className="video">

                                  <a href="#"><img src={image2}></img></a> 
                                    
                                    <div className="title">
                                   
                                      <a href="#"><img src={flower}></img></a>
                                      <a href="#" className="name" title="Can we protect nature by giving it legal rights?">Can we protect nature by giving it legal rights?</a>

                                    </div>

                                    <a href="#" className="channel">abdallah's channel<span>abdallah's channel</span></a>
                                
                                
                                   </div>



                                  <div className="video">

                                  <a href="#"><img src={image3}></img></a> 
                                    
                                    <div className="title">
                                   
                                      <a href="#"><img src={flower}></img></a>
                                      <a href="#" className="name" title="What happen when you start enjoy being alone?">What happen when you start enjoy being alone?</a>

                                    </div>

                                    <a href="#" className="channel">ahmed's channel<span>ahmed's channel</span></a>
                                
                                
                                  </div>



                                  <div className="video">

                                  <a href="#"><img src={image4}></img></a> 
                                    
                                    <div className="title">
                                   
                                      <a href="#"><img src={flower}></img></a>
                                      <a href="#" className="name" title="It is the time for nature: World Environment Day 2020">It is the time for nature: World Environment Day 2020</a>

                                    </div>

                                    <a href="#" className="channel">mohamed's channel<span>mohamed's channel</span></a>
                                
                                
                                  </div>




                                  <div className="video">

                                  <a href="#"><img src={image5}></img></a> 
                                    
                                    <div className="title">
                                   
                                      <a href="#"><img src={flower}></img></a>
                                      <a href="#" className="name" title="Time for Nature: Is a global public health crisis">Time for Nature: Is a global public health crisis</a>

                                    </div>

                                    <a href="#" className="channel">khaled's channel<span>khaled's channel</span></a>
                                
                                
                                  </div>



                                                              <div className="video">

                                    <a href="#"><img src={image1}></img></a> 
                                    
                                    <div className="title">
                                   
                                      <a href="#"><img src={flower}></img></a>
                                      <a className="name" href="#" title="Mohamed Mounir - El bo3d Nar / محمد منير - البعد نار">Mohamed Mounir - El bo3d Nar / محمد منير - البعد نار</a>

                                    </div>

                                    <a href="#" className="channel">mustafa's channel<span>mustafa's channel</span></a>
                                
                                
                             </div>


                                  <div className="video">

                                  <a href="#"><img src={image2}></img></a> 
                                    
                                    <div className="title">
                                   
                                      <a href="#"><img src={flower}></img></a>
                                      <a href="#" className="name" title="Can we protect nature by giving it legal rights?">Can we protect nature by giving it legal rights?</a>

                                    </div>

                                    <a href="#" className="channel">abdallah's channel<span>abdallah's channel</span></a>
                                
                                
                                   </div>



                                  <div className="video">

                                  <a href="#"><img src={image3}></img></a> 
                                    
                                    <div className="title">
                                   
                                      <a href="#"><img src={flower}></img></a>
                                      <a href="#" className="name" title="What happen when you start enjoy being alone?">What happen when you start enjoy being alone?</a>

                                    </div>

                                    <a href="#" className="channel">ahmed's channel<span>ahmed's channel</span></a>
                                
                                
                                  </div>



                                  <div className="video">

                                  <a href="#"><img src={image4}></img></a> 
                                    
                                    <div className="title">
                                   
                                      <a href="#"><img src={flower}></img></a>
                                      <a href="#" className="name" title="It is the time for nature: World Environment Day 2020">It is the time for nature: World Environment Day 2020</a>

                                    </div>

                                    <a href="#" className="channel">mohamed's channel<span>mohamed's channel</span></a>
                                
                                
                                  </div>




                                  <div className="video">

                                    <a href="#"><img src={image5}></img></a> 
                                    
                                    <div className="title">
                                   
                                      <a href="#"><img src={flower}></img></a>
                                      <a href="#" className="name" title="Time for Nature: Is a global public health crisis">Time for Nature: Is a global public health crisis</a>

                                    </div>

                                    <a href="#" className="channel">khaled's channel<span>khaled's channel</span></a>
                                
                                
                                  </div>
    

                        </div>


        </div>
    )
   }
 }
 export default Home;