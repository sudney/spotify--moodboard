import './aboutcontent.css'
export function AboutContent() {
    return(
  
      <div className="about-content">
        <h2 className="about-title">Spotify Moodboard</h2>
        <p>With Spotify Moodboard you can create a visual representation of your favorite music with a theme that best matches
          your music taste. Generated from your top music genre, the theme consists of the background pictures used, font, and color scheme.</p>
        <h2>Log in with a different account</h2>
        <p>If you'd like to log in with a different account, open Spotify in your web browser and log out there.
           Once logged out of Spotify, you can log back in using a different account.</p>
        <h2>Privacy</h2>
        <p>None of your info is saved. Each time you log in, Spotify Moodboard makes a new request to Spotify to display
          your music info! </p> 
      </div> 
    );
  }