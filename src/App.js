
import './App.css';
import { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Side from './Components/Side';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Trend from './Components/Trending';
import Subscriptions from './Components/Subscriptions';
import Video from './Components/video';
class App extends Component {
 

  render(){
   
    
     return (
       <BrowserRouter>
       <div className="App">
         
         <Nav className="navbar"/>
         <div className="container">
              <Side className="sidebar"/>
              <div className="seconds">
                  <Route exact path="/" component = {Home}></Route>
                  <Route exact path="/Trending" component = {Trend}></Route>
                  <Route exact path="/Subscriptions" component = {Subscriptions}></Route>
                  <Route exact path="/Video" component = {Video}></Route>
                 
               </div>
        </div>
        
       </div>
       </BrowserRouter>
     );
  }
}

export default App;
