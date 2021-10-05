
import { Button } from "../Button/Button.jsx";
import { useState ,useEffect} from "react";
import "./login.css";
import axios from 'axios';
import Popup from "../Popup/Popup.js";
export const authEndpoint = 'https://accounts.spotify.com/authorize?';

export default function Login(){
    
  const [creds, setCreds] = useState();
    useEffect(() => {
      axios.post("/spotify/getSpotifyCredentials").then((response => {
        setCreds(response.data.credentials)

      })).catch((error)=> {
        setCreds(false);
        console.log("got error while getting resp from getSpotifyCredentials", error);
     });       
    }, []);

    /* if the server is down a pop up error will display. */
    return(
    <div className="App-header">
        <div className="grid-area-one">
          <h1>Spotify Moodboard</h1>
          <p> use Spotify to visualize how you listen to music</p> 
        <Button onClick={(e) => {
          e.preventDefault();
          creds !== false && creds !== null ? window.location.href=`${authEndpoint}client_id=${creds.clientId}&redirect_uri=${creds.redirectUri}&scope=${creds.scopes.join("%20")}&response_type=token&state=123` : window.location.href="";  
        }} 
        > Login with Spotify 
        </Button>
        </div>
        <div className="grid-area-two"></div>
        <div className="grid-area-three"></div>
        <img className="example" src="https://firebasestorage.googleapis.com/v0/b/spotify-moodboard.appspot.com/o/moodboardexample.png?alt=media&token=b45149d5-f644-456b-8ad5-a9a0c3f5ac3f" alt="example moodboard"/>
        {creds === false ? <Popup trigger={true} content={<div><h2>Oh no!</h2><p className="margin-space">there seems to be an error with the server:( <br></br>
                                                                                                   try again later!</p></div>}></Popup> : ""}
    </div> 
    );

}


