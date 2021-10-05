const spot =  require('./helpers/spotifyHelpers.js');
const SpotifyWebApi = require('spotify-web-api-node');
const spotifyApi = new SpotifyWebApi();
const db = require('./helpers/dbHelpers.js');

 function setSpotifyToken(server){
    server.post('/authorize/getSpotifyToken',  async (req, res) => {
        try {
          if(req.body.token){
            console.log("THE TOKEN: ",req.body.token);
            await spotifyApi.setAccessToken(req.body.token);
            res.sendStatus(200);
          }   
        } catch (error) {
          console.log("an error occured while retrieving token from client: ",error);
        }     
      });
}

function getSpotifyAndThemeContent(server){
    server.post('/spotify/getSpotifyAndThemeContent', async (req,res) => {
      try{
        let moodboard_obj = await spot.get_spotify_obj(spotifyApi);
        let the_theme = await db.getTheme(moodboard_obj.top_genres[0]);

        res.json({spotify: moodboard_obj, theme: the_theme });
      }
      catch(error){
        console.log("an error occured from getSpotifyAndThemeContent: ",error);
        res.sendStatus(403);
      }
    });
}  

function getSpotifyCredentials(server){
    server.post('/spotify/getSpotifyCredentials', async (req,res) => {
        try{
          let creds = await db.getSpotifyCreds();
          res.json({credentials: creds});
        }
        catch(error){
          console.log("an error occured from posting spotify credientals: ",error);
        }
      })
}  

module.exports = {
    setSpotifyToken,
    getSpotifyAndThemeContent,
    getSpotifyCredentials
  }
