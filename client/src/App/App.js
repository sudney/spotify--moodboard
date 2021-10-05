import React, { Component } from "react";
import  Login  from "../components/Login/Login.js";
import "./App.css";
import Collage from "../components/Collage/Collage.js";
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import axios from 'axios';
import { ProtectedRoute } from "../concepts/ProtectedRoute.js";
import Popup from '../components/Popup/Popup.js';

/* extracts access token from anchor part of a URL */ 
const hash = window.location.hash
.substring(1)
.split("&")
.reduce(function(initial, item) {
  if (item) {
    var parts = item.split("=");
    initial[parts[0]] = decodeURIComponent(parts[1]);
  }
  return initial;
}, {});
window.location.hash = "";

class App extends Component {
  constructor() {
    super();   
    this.state = this.setCurrentState();  
  }

  setState(state) {
    window.localStorage.setItem('state', JSON.stringify(state));
    super.setState(state);
  }

/* If the state exists in local storage its initial time stamp will be compared against the current time.
   If the time between the initial state creation time and current time exceed one hour the state will be
   reset. Otherwise, if the state does exist in local storage it will be received and set equal to state.*/
  setCurrentState = () => {
    let curr_time = new Date().getTime();
    let curr_state = JSON.parse(window.localStorage.getItem('state'));

    if( curr_state && (curr_time - curr_state.timestamp) > 3600000 ){
      window.localStorage.removeItem('state');
      curr_state = {};
    }
    
    return curr_state || {};
  }

/** This funtion is passed to the Option component in DropdownButton.js. 
 *  If user selects to logout this function will be called changing the state and no longer
 *  allowing access to the protected route /moodboard.
 */
  updateAuth = (e) =>{
      this.setState({isAuth: e});
      window.localStorage.removeItem('state');
  }
  
  componentDidMount(){

    const sendToken =  () => {
      axios.post("/authorize/getSpotifyToken",{
          token: hash.access_token
      }).then((res)=> {
          getSpotifyData();
      }).catch((error)=> {
         console.log("got error while posting Spotifytoken", error);
      });
    }
  

    const getSpotifyData = () => {
    axios.post("/spotify/getSpotifyAndThemeContent").then((response => {
        console.log("RESP: ",response.data.spotify)
        this.setState({music_info : response.data.spotify,
                       theme: response.data.theme,
                      isAuth: true,
                    timestamp : new Date().getTime()});
      })).catch((error)=> {
        this.setState({theme : 403});
        console.log("got error while getting response from getSpotifyAndThemeContent", error);
     }); 
    }
   
    if(hash.access_token){
      sendToken();  
    }
  }
  
  /**
   * A popup will trigger if a 403 error was returned from getSpotifyAndThemeContent.
   * A popup will trigger if the user hasn't listened enough on Spotify to generate the needed content.
   */

    render() {
      return ( 
        <Router>
        <header className="App">       
          <Switch>
            <Route exact path="/" component={Login} />
            <ProtectedRoute exact path="/moodboard"  component={Collage} componentProps={this.state.music_info} moodtheme={this.state.theme} isAuth={this.state.isAuth} changeAuth={this.updateAuth}/>                  
          </Switch>
          {props.state.theme === 403 ?  <Popup trigger={true} content={<div><h1>Oh no!</h1><p>In order to use Spotify Moodboard you have to send me your email associated with your Spotify so that I can add you since I'm still in development mode. </p></div>} /> : null}
          {this.state.theme && this.state.theme !== 403 && !this.state.theme.font ? <Popup trigger={true} content={<div><h1>Oh no!</h1><p>you do not have enough spotify content to create a moodboard. Keep jamming out and check back at a later time!</p></div>} /> : null}
          {this.state.music_info ? <Redirect to="/moodboard"/> : null }    
          </header>
        </Router>

      );
  }
}
export default App;
