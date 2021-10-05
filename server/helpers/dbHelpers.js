
  const admin = require('firebase-admin');
  const serviceAccount = require('./servicekey/spotify-moodboard-firebase-adminsdk-z2e6y-7e30d2eb2a.json');

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });

  const db = admin.firestore();
  /**
   * DESCRIPTION: retrieves Spotify app credentials from DB so that a api token will be granted. 
   * @returns {
   *            redirectUri: 'http://localhost:3000/',
   *            scopes: [
   *              'user-top-read',
   *              'playlist-read-private',
   *              'playlist-read-collaborative'
   *            ],
   *            clientId: '1234'
   *          }
   */
  async function getSpotifyCreds(){
    try{
      const doc = await db.collection('spotifyAppInfo').doc('fIFLTHaznS8gl4SGsAG9').get();
      return doc.data();
    }
    catch(error){
      console.log("an error occured while retrieving credentials from DB: ",error);
    }
  }
  /**
   * DESCRIPTION: top genre of user determines theme of moodboard. If  a tokenized version of the top genre
   *              is currently associated with the one of the themes in the DB the given theme obj will be returned.
   *              If the top genre isn't currently associated with any stored themes - the default theme will be used.
   * @returns {shadow: '#hexcolor', primary1: '#hexcolor', genre: ['indie',..] ,
   *           background_imgs: [{img:'img_url',img_src:'where i found img'},..] ,primary2: '#hexcolor',
   *           font: 'Concert One'}
   * @param {string} genre top genre of user
   */
  async function getTheme(genre) {
    let chosen_theme;
    
    if(!genre){
      return {
        font: null,
        primary1: null,
        genre: null,
        shadow: null,
        primary2: null,
        background_imgs: null
      }
    }

    let genre_split= genre.split(" ");
    let genre_tokens = genre_split[genre_split.length - 1];

    let snapshot = await db.collection('themes').where('genre', 'array-contains', genre_tokens).get();
    snapshot.forEach((doc) => {
      chosen_theme = doc.data();
    });
    return chosen_theme != null? chosen_theme : (await db.collection('themes').doc('default').get()).data();   
  }

  module.exports = {
    getSpotifyCreds,
    getTheme
  }