import react, { Component } from 'react';
import './Subscriptions.css'
import {Helmet} from "react-helmet";

class Subscriptions extends Component{
    componentDidMount(){
        document.getElementById('togg').style.display = 'none';
        var x =  document.getElementById('sidss');
        x.classList.remove('soper')
       
      }
    render(){

    
    const title = 'Subscriptions - Youtube';

    return(
        <div>
            <Helmet>
            <title>{title}</title>
            </Helmet>
            <div className="sub-cont">
            <i class="fab fa-youtube"></i>
            <p className="firstp">Don’t miss new videos</p>
            <p className="secondp">Sign in to see updates from your favorite YouTube channels</p>
            <button type="submit" className="sub-btn"><i class="fas fa-user"></i> SIGN IN</button>
            </div>

        </div>

    )
}
}

export default Subscriptions;