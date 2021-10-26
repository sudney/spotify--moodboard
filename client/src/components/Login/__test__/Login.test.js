import {render, screen } from '@testing-library/react';
import Login from '../Login.js';
import '@testing-library/jest-dom/extend-expect';

test('login page is correctly displayed', async () => {
    render(<Login/>);
    
    const loginTitle = screen.getByText(/Spotify Moodboard/i);
    expect(loginTitle).toBeInTheDocument();

    const loginBlurb = screen.getByText(/use Spotify to visualize how you listen to music/i);
    expect(loginBlurb).toBeInTheDocument();

    screen.getByRole('button',{name: /Login with Spotify/i});
});


