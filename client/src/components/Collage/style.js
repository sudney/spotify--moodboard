import styled from "styled-components";
import "./collage.css";
import greenhouseImg from '../../imgs/greenhouse.jpg';
import skyImg from '../../imgs/skybuilding.JPG';


export const Moodboard = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-auto-rows: 1fr 1fr 1fr 1fr 1fr 1fr;

    width: 100vw;
    height: 100vh;
    @media only screen and (max-width:560px){
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: repeat(20, 1fr);
      }

`;
export const HeaderTitle = styled.h1`
    justify-content: left;
    font-size: 4vmax;
    text-shadow: 0.4vmax 0.2vmax ${props => props.theme.primary2};
    font-family:${props => props.theme.font};
    margin-left:2%; 
    margin-right:2%; 
    padding-right:10%; 
    flex-shrink: 2;
    width: auto;
    display:flex;
    align-items:center;
    position:relative;

    @media only screen and (max-width:560px){
        font-size: 2.5vmax;
        padding-right:18%;
    }
`;

export const Title = styled.h2`
    margin-top:2%;  
    font-family:${props => props.theme.font};
    text-shadow: 2px 1px #585123;
    font-size:1.8vmax;  
    margin-bottom:3%;
`;


export const ArtistTitle = styled.h3`
    font-size:1.5vmax;
    margin-top:3%;
    margin-bottom:2%;
    font-family: ${props => props.theme.font};
    flex-shrink:2;
`;

export const SongTitle = styled.h4`
    font-size: 0.8vmax;  
    font-family: ${props => props.theme.font};    
    flex-shrink:4;
    margin-top:0px;
    font-weight:normal;
`;

export const AlbumTitle = styled.p`
    writing-mode: vertical-rl;
    text-orientation: upright;
    font-size: 1.4vmax;
    font-family: ${props => props.theme.font};
    flex-shrink:2;
    text-shadow: 2px 2px ${props => props.theme.primary2};  
`;

export const Header = styled.div`
    grid-column-start:1;
    grid-column-end:6;
    background-image: url(${skyImg});
    display:flex;
    display:wrap;
    background-size: cover; 
    @media only screen and (max-width:560px){
        grid-column-start:1;
        grid-column-end:3;
        grid-row:1;
    }
`;

export const LogOut = styled.div`
    grid-column:6 / -1;
    background-color:green;
    background-image: url(${greenhouseImg});
    display:flex;
    justify-content: center;
    font-size: 1.8vw;
    background-size: cover;
    @media (max-width:560px){
        grid-column:3;
        grid-row:1;
        
    }

`;
export const AllTimeArtists = styled.div`
    background-image: url(${props => props.theme.background_imgs[0].img});   
    grid-column-start:1;
    grid-column-end:3;
    grid-row-start:2;
    grid-row-end:6;
    display:flex;
    flex-shrink:0;
    background-size: cover;
    @media (max-width:560px){
        grid-column:1 /3;
        grid-row:2 / 8;
    }
`;

export const AllTimeJames = styled.div`
    grid-column:3;
    grid-row: 2/7;
    background-image: url(${props => props.theme.background_imgs[1].img});
    display: flex;
    flex-direction: column;
    flex-shrink:0; 
    background-size: cover; 
    @media (max-width:560px){
        grid-column:3;
        grid-row:2 / 8;
    }
`;

export const CurrentFavSongs = styled.div`
    background-image: url(${props => props.theme.background_imgs[2].img}); 
    grid-column: 4/5;
    grid-row: 2/7; 
    display: flex;
    flex-direction: column;
    flex-shrink:0;
    background-size: cover;
    @media (max-width:560px){
        grid-column:1;
        grid-row:12/18;
    }
`;

export const MyPlaylists = styled.div`
    background-image: url('${props => props.theme.background_imgs[3].img}');
    grid-column:5 /-1;
    grid-row:2 / 7;
    background-size: cover;
    @media (max-width:560px){
        grid-column:2 /4;
        grid-row:11 / 18;
    }
`;

export const TopArtists = styled.div`
    grid-column:1;
    grid-row: 6 /9;
    background-image: url('${props => props.theme.background_imgs[4].img}');
    background-size: cover;
    @media (max-width:560px){

        grid-column:1;
        grid-row:8/ 12;
    }    
`;

export const FavGenres = styled.div`
    grid-column: 2 / 3;
    grid-row: 6/9;
    background-image: url(${props => props.theme.background_imgs[5].img});
    display: flex;
    flex-shrink: 0;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    background-size: cover;
    @media (max-width:560px){

        grid-column:2;
        grid-row:8/11;
    }
    `;

export const ArtistNames = styled.div`
    grid-column: 3;
    grid-row: 7/9;
    background-image: url(${props => props.theme.background_imgs[6].img});
    display: flex;
    flex-shrink: 0;
    flex-direction:column;
    justify-content: center;
    background-size: cover;
    text-shadow: 0.22vmax 0.1vmax ${props => props.theme.primary1};
    @media (max-width:560px){
        grid-column:3;
        grid-row:8 / 11;
    }
    `;

export const TopAlbums = styled.div`
    background-image: url(${props => props.theme.background_imgs[7].img});
    grid-column:4/-1;
    grid-row: 7/9; 
    display: flex;
    flex-direction: row;
    flex-shrink:0;
    background-size: cover; 
    @media (max-width:560px){
        grid-column:1 /4;
        grid-row:18/21;
    }  
`;

export const ArtistLabel = styled.h2`
    font-family: ${props => props.theme.font};
    font-size:1.5vmax;
    padding: 10px 30px;
    background-color: ${props => props.theme.primary2};
    flex-shrink:2;
    

`;

export const GenreLabel = styled.div`
    font-family: ${props => props.theme.font};
    font-size: 1.2vmax;
    font-weight:normal;
    padding: 0.3vmax 0.3vmax 0vmax 0.3vmax;
    flex-shrink:2;
    border-radius: 20px;
    background-color:${props => props.theme.primary1};
    margin-bottom:2%;
    margin-top:2%;
    width:12vmax;
    height: 2vmax;
`;

export const SongContainer = styled.div`
    display:flex;
    flex-shrink: 2;
    align-items: center;
    flex-direction: row;
    background-color:${props => props.theme.primary1};
    margin: 7%;
    padding-right:2%;
    font-family: ${props => props.theme.font};
`;

export const DropMenu = styled.label`
font-family: ${props => props.theme.font};
display: flex;
justify-content: center;

margin-top:1%;
position:absolute;
font-size: 1.4vmax;
flex-shrink:2;
border-radius: 10px;
background-color: ${props => props.theme.primary2};
width:9vmax;
height:9vmax;
line-height: 50px;
z-index:10;
ul{
    padding: 0;
    margin: 0;
    display: block;
    justify-content:center;
    align-items:center;
    display:flex;
    flex-direction:column;
    flex-shrink:0;
}

ul li {
    list-style: none;
    width:8.5vmax;
    margin:0.05em;
    height:7vmax;
    border-radius: 10px;
    flex-shrink:2;
    display:flex;
    justify-content:center;
    align-items:center;    
    transition: filter 300ms;
    background-color:${props => props.theme.primary2};
  }
ul li button {
    font-family:inherit;
    display: block;
    font-size: 1vmax;
    font-weight: normal;
    text-decoration: none;
    color:white;
    cursor:pointer;
    background: none;
    border: none;
    width:8.5vmax;
    margin:0.05em;
    height:2.6vmax;
    border-radius: 10px;
    flex-shrink:2;
    font-size:1.2vmax;
    display:flex;
    justify-content:center;
    align-items:center;    
    transition: filter 300ms;
    background-color:${props => props.theme.primary2};

}

ul li:hover {
    color: black;
    filter: brightness(1.1);
  }
`;
export const DropdownButtonWrapper = styled.button`
font-family: ${props => props.theme.font};
justify-content: center;
background: none;
border: none;
align-items: center;
background-color: ${props => props.theme.primary2};
display: flex;
position:relative;
font-size: 1.4vmax;
flex-shrink:2;
height:auto;
border-radius: 20px;
color:white;
cursor: pointer;
margin-top:15%;
width:9vmax;
transition: filter 300ms;

&:hover {
    filter: brightness(1.1);
  }
`;