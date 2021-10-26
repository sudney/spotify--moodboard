import {render, screen} from '@testing-library/react';
import  Collage  from '../Collage';
import '@testing-library/jest-dom/extend-expect';
import {music_info,theme} from '../../../__test__/mock_objs'

test('collage displays without crashing.', () => {
    render(<Collage spotify={music_info} theme={theme} isauth={true}/>);
    
});

test('collage displays Moodboard title',() => {
    render(<Collage spotify={music_info} theme={theme} isauth={true}/>);
    
    const CollageTitle = screen.getByText('Spotify Moodboard');
    expect(CollageTitle).toBeInTheDocument();
});

test('collage displays user profile picture image',() => {
    render(<Collage spotify={music_info} theme={theme} isauth={true}/>);

    const profilePicture = screen.getByAltText('profile');
    expect(profilePicture).toBeInTheDocument();
});

test('collage displays top artists of all time component', () => {
    render(<Collage spotify={music_info} theme={theme} isauth={true}/>);
    const allTimeArtists = screen.getByTestId('alltime-artists');
    expect(allTimeArtists).toBeInTheDocument();
});


test('collage displays top songs of all time component', () => {
    render(<Collage spotify={music_info} theme={theme} isauth={true}/>);

    expect(screen.getByText(music_info.alltime_tracks[0].name)).toBeInTheDocument();
    expect(screen.getByText(music_info.alltime_tracks[1].name)).toBeInTheDocument();
    expect(screen.getByText(music_info.alltime_tracks[2].name)).toBeInTheDocument();
    expect(screen.getByText(music_info.alltime_tracks[3].name)).toBeInTheDocument();
});

test('collage displays current top songs component', () => {
    render(<Collage spotify={music_info} theme={theme} isauth={true}/>);

    expect(screen.getByText(music_info.top_tracks[0].name)).toBeInTheDocument();
    expect(screen.getByText(music_info.top_tracks[1].name)).toBeInTheDocument();
    expect(screen.getByText(music_info.top_tracks[2].name)).toBeInTheDocument();
    expect(screen.getByText(music_info.top_tracks[3].name)).toBeInTheDocument();
});

test('collage displays playlists component', () => {
    render(<Collage spotify={music_info} theme={theme} isauth={true}/>);

    expect(screen.getByAltText(music_info.top_playlists[0].name)).toBeInTheDocument();
    expect(screen.getByAltText(music_info.top_playlists[1].name)).toBeInTheDocument();
    expect(screen.getByAltText(music_info.top_playlists[2].name)).toBeInTheDocument();
    expect(screen.getByAltText(music_info.top_playlists[3].name)).toBeInTheDocument();
});

test('collage displays current top artists component', () => { 
    render(<Collage spotify={music_info} theme={theme} isauth={true}/>);

    const allTimeArtists = screen.getByTestId('current-top-artists');
    expect(allTimeArtists).toBeInTheDocument();
});

test('collage displays top genres component', () => {
    render(<Collage spotify={music_info} theme={theme} isauth={true}/>);

    expect(screen.getByText(music_info.top_genres[0])).toBeInTheDocument();
    expect(screen.getByText(music_info.top_genres[1])).toBeInTheDocument();
    expect(screen.getByText(music_info.top_genres[2])).toBeInTheDocument();
    expect(screen.getByText(music_info.top_genres[3])).toBeInTheDocument();
});

test('collage displays all time favorite artists name', () => {
    render(<Collage spotify={music_info} theme={theme} isauth={true}/>);

    expect(screen.getByText(music_info.top_artists[0].name)).toBeInTheDocument();
    expect(screen.getByText(music_info.top_artists[1].name)).toBeInTheDocument();
    expect(screen.getByText(music_info.top_artists[2].name)).toBeInTheDocument();
    expect(screen.getByText(music_info.top_artists[3].name)).toBeInTheDocument();
});

test('collage displays saved albums', () => {
    render(<Collage spotify={music_info} theme={theme} isauth={true}/>);

    expect(screen.getByAltText(music_info.top_albums[0].name)).toBeInTheDocument();
    expect(screen.getByAltText(music_info.top_albums[1].name)).toBeInTheDocument();
    expect(screen.getByAltText(music_info.top_albums[2].name)).toBeInTheDocument();
    expect(screen.getByAltText(music_info.top_albums[3].name)).toBeInTheDocument();
});
