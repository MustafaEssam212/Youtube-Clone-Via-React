import React, { Component } from 'react';
import './trending.css'
import image1 from './images/1.jpg'
import image2 from './images/2.jpg'
import image3 from './images/3.jpg'
import image4 from './images/4.jpg'
import image5 from './images/5.jpg'
import {Link} from 'react-router-dom'
import {Helmet} from "react-helmet";

class Trend extends Component{
  componentDidMount(){
    document.getElementById('togg').style.display = 'none';
    var x =  document.getElementById('sidss');
    x.classList.remove('soper')
    
    
  }

 
  render(){
  
  const title = 'Trending - Youtube';
   return(
     
       <div>
          <Helmet>
            <title>{title}</title>
            </Helmet>
           <div className="trend-cont">

                         <div className="trend-video">

                            <a href="#" className="trend-thumbnail"><img src={image1}></img></a> 
                                    
                                    <div className="trend-title">
                                   
                                      <a href="#" className="trend-texts">
                                      <a className="trend-name" title="Mohamed Mounir - El bo3d Nar / محمد منير - البعد نار">Mohamed Mounir - El bo3d Nar / محمد منير - البعد نار</a><br/>
                                      <a className="trend-channel">mustafa's channel .<span>mustafa's channel</span> 1.3M views 21 hours ago</a><br/>
                                        <a className="trend-descr">اغنية البعد نار لمحمد منير من البوم يا اهل العرب والطرب</a>
                                      </a>                 
                                    </div>

                                    
                                
                                
                             </div>


                                  <div className="trend-video">

                                  <a href="#"><img src={image2}></img></a> 
                                    <div className="trend-title">
                                   
                                   <a href="#" className="trend-texts">
                                   <a className="trend-name" title="Can we protect nature by giving it legal rights?">Can we protect nature by giving it legal rights?</a><br/>
                                   <a className="trend-channel">abdallah's channel .<span>abdallah's channel</span> 952K views .21 hours ago</a><br/>
                                     <a className="trend-descr"> ‪nature description‬‏Nature, in the broadest sense, is the natural, physical, material world or universe. "Nature" can refer to the phenomena of the physical world, and also to life in general. The study of nature is</a>
                                   </a>                 
                                 </div>
                                
                                
                                   </div>



                                  <div className="trend-video">

                                  <a href="#"><img src={image3}></img></a> 
                                    
                                    <div className="trend-title">
                
                                    <a href="#" className="trend-texts">
                                    <a className="trend-name" title="What happen when you start enjoy being alone?">What happen when you start enjoy being alone?</a><br/>
                                   <a className="trend-channel">ahmed's channel .<span>ahmed's channel</span> 1M views 21 hours ago</a><br/>
                                     <a className="trend-descr">Loneliness causes people to feel empty, alone, and unwanted. People who are lonely often crave human contact, but their state of mind makes it more difficult to form connections with other people.</a>
                                   </a>                
                                
                                    </div>

                                
                                  </div>



                                  <div className="trend-video">

                                  <a href="#"><img src={image4}></img></a> 
                                    
                                    <div className="trend-title">
                                   
                                    <a href="#" className="trend-texts">
                                    <a className="trend-name" title="It is the time for nature: World Environment Day 2020">It is the time for nature: World Environment Day 2020</a><br/>
                                    <a className="trend-channel">mohamed's channel .<span>mohamed's channel</span> 1M views 21 hours ago</a><br/>
                                     <a className="trend-descr">It's not that I like nature, it's that I'm in love with it. I love the mountains, the snow, the trees and the animals. To imagine this world destroyed is to leave my soul ...</a>
                                   </a>   
                                    </div>
                                
                                  </div>




                                  <div className="trend-video">

                                  <a href="#"><img src={image5}></img></a> 
                                    
                                    <div className="trend-title">
                                   
                                    <a href="#" className="trend-texts">
                                    <a className="trend-name" title="Time for Nature: Is a global public health crisis">Time for Nature: Is a global public health crisis</a><br/>
                                    <a className="trend-channel">khaled's channel .<span>khaled's channel</span> 805K views 21 hours ago</a><br/>
                                     <a className="trend-descr">“I declare this world is so beautiful that I can hardly believe it exists.” The beauty of nature can have a profound effect upon our senses,</a>
                                   </a>   
                                    </div>


                                  </div>



             </div>
       </div>
   )
  }
}
export default Trend;