import "./collage.css";
import {Moodboard,Header, HeaderTitle,LogOut,AllTimeArtists,AllTimeJames,ArtistTitle , 
        Title, CurrentFavSongs,MyPlaylists,TopArtists,FavGenres,ArtistNames, ArtistLabel,
        GenreLabel,SongTitle,TopAlbums,AlbumTitle,SongContainer} from './style.js';
import  {ThemeProvider} from "styled-components";

import {DropdownButton} from "../DropDownButton/DropdownButton.js";

export default function Collage(props) {

        return( 
            <ThemeProvider theme={
                props.theme
            }>
            <Moodboard> 
                <Header>               
                    <HeaderTitle> 
                        Spotify Moodboard
                        <div className="circular--landscape">
                            <img src={props.spotify.user.user_image} alt="profile" width="80"/>
                        </div> 
                    </HeaderTitle>
                </Header>
                
                <LogOut>
                    <DropdownButton isAuth={props.isauth} themeImages={props.theme.background_imgs}>
                        Account   
                    </DropdownButton> 
                </LogOut>
            
                <AllTimeArtists>         
                    {<ImageList images={props.spotify.alltime_artists} />}
                </AllTimeArtists>
                
                <AllTimeJames>
                    <Title>All Time Jams</Title>
                    {props.spotify.alltime_tracks.map((curr_song, index) => ( <Songs song={curr_song} key={index}/>))}
                </AllTimeJames>
            
                <CurrentFavSongs>
                    <Title>Current Favs</Title>
                    {props.spotify.top_tracks.map((curr_song, index) => ( <Songs song={curr_song} key={index+5}/>))}
                </CurrentFavSongs>
            
               <MyPlaylists>
                    <Title>My Playlists</Title>
                    <div className="quad-flex">
                        {props.spotify.top_playlists.map((curr_playlist, index) => ( <Playlists playlist={curr_playlist} key={index+10}/>))}  
                    </div> 
                </MyPlaylists>

                <TopArtists>
                    <Title>Top Artists Now</Title>
                    <div className="quad-flex" data-testid="current-top-artists" >
                        {props.spotify.top_artists.map((curr_artist, index) => ( <Artists artist={curr_artist} key={index+15}/>))}
                    </div>    
                </TopArtists>
            
                <FavGenres>
                    <Title>Fav Genres</Title>                   
                    {props.spotify.top_genres.map((curr_artist, index) => ( <GenreLabels genre={curr_artist} key={index+20}/>))}                   
                </FavGenres>         
             
                <ArtistNames>
                    {props.spotify.alltime_artists.map((curr_artist, index) => (<ArtistTitle key={index+25}>{curr_artist.name} </ArtistTitle> ))}
                </ArtistNames>
                          
                {<Albums album={props.spotify.top_albums} />}               
            </Moodboard>
            </ThemeProvider>
           
        );

}

    const ImageList = (props) => {
        return( 
            <div className="quad-flex" data-testid="alltime-artists">                   
                    <img id="artist_img" src={props.images[0].img} alt={props.images[0].name} />
                    {props.images[1] ? <img id="artist_img" src={props.images[1].img} alt={props.images[1].name} /> : null }
                    <ArtistLabel>All Time Artists </ArtistLabel>
                    {props.images[2] ? <img id="artist_img" src={props.images[2].img} alt={props.images[2].name} /> : null }                   
                    {props.images[3] ? <img id="artist_img" src={props.images[3].img} alt={props.images[3].name} /> : null }             
            </div> 
        );   
    };
  const Playlists = (props) => {
    return(
        <div className="playlist_label">
                <img id="playlist_img" src={props.playlist.img} alt={props.playlist.name}/>       
        </div>
        );     
    }
    const GenreLabels = (props) => {   
        return(          
            <GenreLabel> {props.genre} </GenreLabel>
        ); 
    };

    const Artists = (props) => {   
        return(        
            <div>
                <img id="circle-img"  src={props.artist.img} alt={props.artist.name}   height='80' />
                <SongTitle>{props.artist.name}</SongTitle>
            </div>       
        ); 
    };

    const Albums = (props) => {
        return(
            <TopAlbums>
                <AlbumTitle>Albums</AlbumTitle>
                    { props.album ? props.album.map((curr_album, index) => (<img id="album_img" src={curr_album.img} alt={curr_album.name}   key={index+30} />)) : <Title>Save More Albums!</Title>}
                <AlbumTitle>Albums</AlbumTitle>
            </TopAlbums>       
         ) 
    }

    const Songs = (props) => {
        return(
            <SongContainer>
                <img  id="song_img" src={props.song.img} alt={props.song.name}   height='80' />
                <SongTitle>{props.song.name}</SongTitle>
            </SongContainer>
        );
    }