import React, { Component } from 'react';
import './Nav.css';
import image from './images/logo.png'


class Nav extends Component {
    componentDidMount(){
       
        
    }

  render(){

    

    function myVisible() {
            document.getElementById('fod').style.display ='block';
            document.getElementById('forza').style.display = 'none';
    }

    function myBack() {
        document.getElementById('fod').style.display ='none';
        document.getElementById('forza').style.display = 'block';
    }

    function myToggle() {
        document.getElementById('sidss').classList.toggle('side');
        document.getElementById('sidss').style.animation = 'anime .5s linear forwards';
    }

   

        return(
            
            <div>
                <div className="nvhdr" id="fod">
                        <div className="vhdr">
                        <i onClick={myBack} className="fas fa-arrow-left"></i>
                        <div className="searchdiv">
                        <input className="vsearch" id="searchbar" placeholder="Search" ></input>
                        <button type="submit" id="vsrbtn" ><i className="fas fa-search" title="Search"></i></button>
                        </div>
                        <i className="fas fa-microphone"></i>
                        </div>
                </div>



                <header className="header">
                <i class="fas fa-bars videotog" id="togg"></i>
                <i onClick={myToggle} class="fas fa-bars maintog" id="not"></i>
                <a href="../"><img src={image} className="hdimg" alt="YouTube"></img></a>


                <div className="searchdiv">
                <input className="search" id="searchbar" placeholder="Search" ></input>
                <button type="submit" id="srbtn" ><i onClick={myVisible} id="forza" class="fas fa-search" title="Search"></i></button>
                </div>
                 
                 <div className="cate">
                 <i class="fas fa-ellipsis-v"></i>
                 <button type="submit"><i class="fas fa-user"></i> SIGN IN</button>
                 </div>

                </header>
            </div>
            
    )
}
}

export default Nav;