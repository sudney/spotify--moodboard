
import { Button } from "../Button/Button.jsx";
import "./login.css";
import exampleImage from '../../imgs/exmoodboard.jpg';
export const authEndpoint = 'https://accounts.spotify.com/authorize?';

const SCOPES = ['user-top-read', 'playlist-read-private','playlist-read-collaborative']
const REDIRECT_URI = 'https://whispering-plains-27367.herokuapp.com/moodboard/';
// 
export default function Login(){

    return(
    <div className="App-header">
        <div className="grid-area-one">
          <h1>Spotify Moodboard</h1>
          <p>use Spotify to visualize how you listen to music</p> 
        <Button onClick={(e) => {
          e.preventDefault();
          window.location.href=`${authEndpoint}client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES.join("%20")}&response_type=token&state=123`;  
        }} 
        > Login with Spotify 
        </Button>
        </div>
        <div className="grid-area-two"></div>
        <div className="grid-area-three"></div>
      
        <img className="example" src={exampleImage}alt="example moodboard"/>
        {process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEV_MODE : process.env.REACT_APP_PRO_MODE}
    </div> 
    );

}

        /*{creds === false ? <Popup trigger={true} content={<div><h2>Oh no!</h2><p className="margin-space">there seems to be an error with the server:( <br></br>
                                                                                                   try again later!</p></div>}></Popup> : ""}*/

