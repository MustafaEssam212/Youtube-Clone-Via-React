import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';
import './Side.css';


class Side extends Component {
       
render(){
     

        return(
            <div>

                    <div className="fixedside">

                <div className="side" id="sidss">


                    <div className="first">

                                    <NavLink exact to="/">
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

                </div>



            </div>
            
    )
}
}

export default Side;