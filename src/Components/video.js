import React, {Component} from 'react';
import mounir from '../videos/mounir.mp4'
import {Link, NavLink} from 'react-router-dom';
import image1 from './images/1.jpg'
import image2 from './images/2.jpg'
import image3 from './images/3.jpg'
import image4 from './images/4.jpg'
import image5 from './images/5.jpg'
import './video.css'
import imagead from './images/ad.png'
import ReactPlayer from 'react-player'
import flower from './images/flower.jpg'
class Video extends Component{

componentDidMount(){
    var x =  document.getElementById('sidss');
    x.classList.add('soper')
    var y = document.getElementById('togg');
    y.style.display = 'block';
    y.onclick = function () {
        document.getElementById('vsidss').classList.toggle('vside');
        document.getElementById('vsidss').style.animation = 'anime .5s linear forwards';
        
    }

    if(window.innerWidth < 850){
            document.getElementById('not').style.visibility = 'hidden';
    }
  
}





render(){
        
      
        
    return(
       
        

        <div>
             
            

                                
                <div className="vside" id="vsidss">


                    <div className="first">

                                    <NavLink  exact to="/">
                                                <div>
                                                    <i class="fas fa-home"></i>
                                                    <a id="anchor">Home</a>
                                            </div>
                                    </NavLink>

                                    <NavLink  to="/Trending">
                                                <div>
                                                    <i class="fas fa-fire"></i>
                                                    <a>Trending</a>
                                                </div>
                                        </NavLink>

                                    <NavLink  to="/Subscriptions">
                                            <div>
                                                    <i class="fab fa-youtube"></i>
                                                    <a>Subscriptions</a>
                                            </div>
                                    </NavLink>
                        </div>

                        <hr></hr>


                        <div className="first">

                                    <NavLink  to="/Library">
                                                <div>
                                                <i class="fas fa-photo-video"></i>
                                                    <a>Library</a>
                                            </div>
                                    </NavLink>

                                    <NavLink  to="/History">
                                                <div>
                                                <i class="fas fa-history"></i>
                                                    <a>History</a>
                                                </div>
                                        </NavLink>

                                   
                        </div>

                                        <hr></hr>

                                        
                        <div className="second">
                                    <p>Sign in to like videos, comment, and subscribe.</p>
                                    <button type="submit"><i class="fas fa-user"></i> SIGN IN</button>
                        </div>             

                        

                                        <hr></hr>


                          <div className="first" style={{marginTop: "0px"}}>

                                    <NavLink to="/Live">
                                                <div>
                                                <i class="fas fa-broadcast-tower"></i>
                                                    <a>Live</a>
                                            </div>
                                    </NavLink>

                                   
                        </div>


                                <hr></hr>



                        <div className="first">

                                    <NavLink  to="/Settings">
                                                <div>
                                                <i class="fas fa-cog"></i>
                                                    <a>Settings</a>
                                            </div>
                                    </NavLink>

                                    <NavLink  to="/Report">
                                                <div>
                                                <i class="fas fa-flag"></i>
                                                    <a>Report</a>
                                            </div>
                                    </NavLink>

                                    <NavLink  to="/Help">
                                                <div>
                                                <i class="fas fa-question-circle"></i>
                                                    <a>Help</a>
                                            </div>
                                    </NavLink>

                                    <NavLink  to="/Feedback">
                                                <div>
                                                <i class="fas fa-comment-alt"></i>
                                                    <a>Feedback</a>
                                            </div>
                                    </NavLink>

                                   
                        </div>



                </div>









                <div className='main'>

                          <div  className="video-side">
                        
                                         <ReactPlayer 
                                                id="vidoo"
                                                url={mounir}
                                                controls
                                                playing={true}
                                                
                                         >
                                         </ReactPlayer>
                                   

                         <div className="video-info">
                         <div className="video-title">
                         Mohamed Mounir - El bo3d Nar / محمد منير - البعد نار
                             </div>
                             <div className="like-view-share">

                                     <div className="left-side">
                                             <p>5748 views</p><p className="ptwo">Jan 14, 2021</p>

                                     </div>

                                      <div className="right-side">
                                                        <div>
                                      <i class="fas fa-thumbs-up"></i>
                                      <i class="fas fa-thumbs-down"></i>
                                      </div>
                                      <p className="pthree"><i class="fas fa-share"></i> Share</p>

                                     </div>
                                 
                             </div>

                                                                        <hr className="vhr"></hr>


                             <div className="desc">
                                     <div>
                             <a href="#"><img src={flower}></img> mustafa's channel</a>
                             <button type="submit">SUBSCRIBE</button>
                                          </div>
                                          <p>Mounir's Song El Bo3d Nar <br></br> اغنية البعد نار لمحمد منير من البوم يا اهل العرب والطرب</p>
                        
                             </div>
                             <hr className="vhr"></hr>
                    
                             
                             <div className="comments">
                                <p>Comments are turned off.</p>

                             </div>
                         </div>

                              </div>      



                            <div className="suggest-side">

                                        <div className="ad">
                                        <img src={imagead}></img>
                                        </div>

                                        <div className="sugg-videos">


                                                        
                                        <div className="vvideo">
                             
                             <Link to="./Video" className="vthumbnail"><img src={image1}></img></Link> 
                                     
                                     <div className="vtitle">
                                    
                                     
                                       <Link className="vname" to="./video" title="Mohamed Mounir - El bo3d Nar / محمد منير - البعد نار">Mohamed Mounir - El bo3d Nar / محمد منير - البعد نار</Link>
                                       <a href="#" className="vchannel">mustafa's channel <span>mustafa's channel</span></a>
                                     </div>
 
                                   
                                 
                                 
                              </div>
 
 
                                   <div className="vvideo">
 
                                   <a href="#"><img src={image2}></img></a> 
                                     
                                     <div className="vtitle">
                                    
                             
                                       <a href="#" className="vname" title="Can we protect nature by giving it legal rights?">Can we protect nature by giving it legal rights?</a>
                                       <a href="#" className="vchannel">abdallah's channel<span>abdallah's channel</span></a>
                                 
                                 
                                     </div>
 
                                 
                                    </div>
 
 
 
                                   <div className="vvideo">
 
                                   <a href="#"><img src={image3}></img></a> 
                                     
                                     <div className="vtitle">
                                    
                           
                                       <a href="#" className="vname" title="What happen when you start enjoy being alone?">What happen when you start enjoy being alone?</a>
                                       <a href="#" className="vchannel">ahmed's channel<span>ahmed's channel</span></a>
                                 
                                 
                                     </div>
 
                               
                                   </div>
 
 
 
                                   <div className="vvideo">
 
                                   <a href="#"><img src={image4}></img></a> 
                                     
                                     <div className="vtitle">
                                    
                         
                                       <a href="#" className="vname" title="It is the time for nature: World Environment Day 2020">It is the time for nature: World Environment Day 2020</a>
                                       <a href="#" className="vchannel">mohamed's channel<span>mohamed's channel</span></a>
                                 
                                     </div>
 
                                   
                                 
                                   </div>
 
 
 
 
                                   <div className="vvideo">
 
                                   <a href="#"><img src={image5}></img></a> 
                                     
                                     <div className="vtitle">
                                    
                   
                                       <a href="#" className="vname" title="Time for Nature: Is a global public health crisis">Time for Nature: Is a global public health crisis</a>
                                       <a href="#" className="vchannel">khaled's channel<span>khaled's channel</span></a>
                                 
                                     </div>
 
                                    
                                 
                                   </div>
 
 
 
 


                                                
                                        </div>

                            </div>

                </div>


        </div>

    )
}
}

export default Video;