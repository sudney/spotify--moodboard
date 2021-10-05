const express = require("express");
const PORT = process.env.PORT || 8080;
const cors = require('cors');
const app = express();
const path = require('path');
const spotifyAPI = require('./spotifyAPI.js');
app.use(express.json());
const whitelist = ['http://localhost:3000', 'http://localhost:8080', 'https://whispering-plains-27367.herokuapp.com']
const corsOptions = {

   function (origin, callback) {
    
    console.log("** Origin of request " + origin)
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable")
      callback(null, true)
    } else {
      console.log("Origin rejected")
      callback(new Error('Not allowed by CORS'))
    } 
  },

  credentials: true

}
app.use(cors(corsOptions))


if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, '../client/build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}
spotifyAPI.setSpotifyToken(app);
spotifyAPI.getSpotifyCredentials(app);
spotifyAPI.getSpotifyAndThemeContent(app);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});


