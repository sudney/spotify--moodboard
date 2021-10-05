const LIM = 50;

/**
 * DESCRIPTION: 
 * calc_ranking calculates the ranking for every genre the user listens to. Ranking is determined by viewing
 * each top artists' genres, and accumlating a score based on how often a given genre appears amoung all top artists.
 * Rankings are weighted - where higher ranked artists contribute to a higher score for a genre appearance. 
 * @param {Array} curr_genres array of genres associated with the users top artists
 * @param {int} track_index the ranking of the current artist from 1 - 50. 1 being most listened to artist
 * @param {Map} genres a map that has the genre as the key and the genre ranking as the value.
 */
function calc_ranking(curr_genres,track_index,genres){
    for(let g in curr_genres){
      if(!genres.has(curr_genres[g])){
        genres.set(curr_genres[g],{ rank : (LIM - track_index)/LIM});
      }
      else{
        genres.set(curr_genres[g],{ rank : genres.get(curr_genres[g]).rank + (LIM - track_index)/LIM});
      }
    }
}
/**
 * DESCRIPTION: builds two lists of size four of the users short term and long term top artists.
 *              calls calc_ranking and returns genre map with all users genres and their assoc. rank.
 * @param {object} spotifyApi SpotifyWebApi object that allows us to access Spotify API wrapper
 *                            short term artist list                           long term artist list                        genres
 * @returns [ [ [{name: 'phoebe bridgers' , img: 'theurl'}] ,...], [ [{name: 'the red pears' , img: 'theurl'}] ], {'indie':10.2,'rock':9.8,..} ]
 */

var get_top_artists = async function (spotifyApi){
  all_top_artists = []
  let genres = new Map();
  range_choices = ['short_term','long_term'];
  for( let timerange in range_choices){
    const top = await spotifyApi.getMyTopArtists({
      time_range: range_choices[timerange], //weekly
      limit: LIM,
      offset: 0
    });
  alltime_artists = [];
  for( let artist_index in top.body.items){
      curr_genres = top.body.items[artist_index].genres
      calc_ranking(curr_genres,artist_index,genres);
      if(alltime_artists.length < 4){
        alltime_artists.push({name: top.body.items[artist_index].name,img: top.body.items[artist_index].images[0].url})
      }
  }
  all_top_artists.push(alltime_artists);
  }
  all_top_artists.push(genres);
  return all_top_artists;
}
/**
 * DESCRIPTION: builds two lists of size four of the users short term and long term top songs.
 * @param {object} spotifyApi 
 * @returns [ [{name:'selfless', artist:'the strokes',img: 'url'},...] , [{name:'Maura', artist:'Wednesday',img: 'url'}]]
 */

var get_top_tracks = async function (spotifyApi){
  all_top_tracks = []
  range_choices = ['short_term','long_term'];
  for( let timerange in range_choices){
    const top_tracks = await spotifyApi.getMyTopTracks({
      time_range: range_choices[timerange], //weekly
      limit: 4,
      offset: 0
    }); 
    var alltime_tracks = [];

    for( let track_index in top_tracks.body.items){
        try{
          alltime_tracks.push({name: top_tracks.body.items[track_index].name,
                      artist:top_tracks.body.items[track_index].artists[0].name,
                      img: top_tracks.body.items[track_index].album.images[0].url});
        }
        catch (err) {
            console.error("getting the track was unsuccessful. error: ",err);
        }  
    }
    all_top_tracks.push(alltime_tracks);
  }
  return all_top_tracks;

}

/**
 * DESCRIPTION: calls get_top_artists so that genre map can be sorted and sliced to return top 4 genres.
 * @param {object} spotifyApi
 *              GENRE            LONGTERM ARTISTS                      SHORTTERM ARTISTS 
 * @returns [ ['genre',...] ,[{name: 'artist_name',img: 'url'}], [{name: 'artist_name',img: 'url'}] ]
 */
var get_topgenres =  async function (spotifyApi){
  var [shortterm_artists,longterm_artists,genres] = await get_top_artists(spotifyApi);
  /*sorts genres in order by rank in ascending order, slice to retrieve top 4*/
  var the_genres =  new Array([...genres.entries()].sort(function(a, b) {
      return b[1].rank - a[1].rank
    }))[0].slice(0, 4); 
  /** Remove rank from object so its only list of genres */
  
  for(let i in the_genres){
    the_genres[i] = the_genres[i][0]
  }
  return [the_genres,longterm_artists,shortterm_artists];
}
/**
 * DESCRIPTION: gets 4 of the users saved albums.
 * @param {object} spotifyApi 
 * @returns [{name: 'apricot princess', img: 'url'},..] 
 *
 */
var get_topalbums =  async function (spotifyApi){
  try{
    var saved_albums = await spotifyApi.getMySavedAlbums({
        limit : 4,
        offset: 0
      });
    var top_albums = []
    for( let album_index in saved_albums.body.items){
        try{
            top_albums.push({name: saved_albums.body.items[album_index].album.name, 
                            img: saved_albums.body.items[album_index].album.images[0].url})
        }
        catch (err) {
            console.error("getting the top album was unsuccessful. error: ",err);
        }  
    }
    return top_albums
  }
  catch (err) {
    console.error("no albums have been saved.", err);
  } 
}
/**
 * DESCRIPTION: get users albums that they have saved from other users or that they have created themselves.
 *              Also retrieves users profile pic if thet have one.
 * @param {*} spotifyApi 
 * @returns [ [{name : 'my work', img: 'url'},...], {user_image: 'url'} ]
 */
var get_playlists =  async function (spotifyApi){
  var user_img;
  try{
    var user_info = await spotifyApi.getMe();
    user_img = user_info.body.images[0].url;
  }
  catch(err){
    /** if user doesn't have prof pic set it to default img */
    user_img = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';
  }
  try{
    var users_playlists = await spotifyApi.getUserPlaylists({
      display_name: user_info.display_name,
      limit: 10, 
      offset: 0
    });

    var playlists = []
    for( let playlist_index in users_playlists.body.items){
        try{
          if(users_playlists.body.items[playlist_index].owner.display_name !== 'Spotify' && playlists.length < 4 ){
              playlists.push({name: users_playlists.body.items[playlist_index].name, 
                                img: users_playlists.body.items[playlist_index].images[0].url})
          }
        }
        catch (err) {
            console.error("getting the  playlist was unsuccessful. ",err);
        }  
    }
    return [playlists, {user_image: user_img} ];
  }
  catch(err){
    console.error("an error happen while getting data for user playlists ",err);
  }
}
/**
 * builds object of all users music data that has been collected to be used in front-end.
 * @param {object} spotifyApi 
 * @returns { user            : {user_image: 'url }, 
 *            top_artists     : [{name: 'phoebe bridgers' , img: 'theurl'},...],
 *            alltime_artists : [{name: 'the red pears' , img: 'theurl'},... ],
 *            top_albums      : [{name: 'apricot princess', img: 'url'},..],
 *            top_tracks      : [{name:'selfless', artist:'the strokes',img: 'url'},...],
 *            top_genres      : ['indie','rock','alternative','pop'],
 *            top_playlists   : [{name : 'my work', img: 'url'},...],
 *            alltime_tracks  : [{name:'Maura', artist:'Wednesday',img: 'url'},...] 
 *          }
 */
var get_spotify_obj =  async function (spotifyApi){
  
  let [topalbums, toptracks, topgenres, topplaylists] = await Promise.all([
                                                                            get_topalbums(spotifyApi),
                                                                            get_top_tracks(spotifyApi),
                                                                            get_topgenres(spotifyApi),
                                                                            get_playlists(spotifyApi)]);
    return {
          user          : topplaylists[1],
          top_artists   : topgenres[2],
          alltime_artists: topgenres[1],
          top_albums    : topalbums,
          top_tracks    : toptracks[0],
          top_genres    : topgenres[0],
          top_playlists : topplaylists[0],
          alltime_tracks: toptracks[1]
        }  
}


module.exports = {
  get_spotify_obj
}
