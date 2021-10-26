import { render, screen } from "@testing-library/react";
import { AboutContent } from "../AboutContent";
import '@testing-library/jest-dom/extend-expect';

test('all content is displayed',() => {
    render(<AboutContent/>);
    const aboutContentHeader = screen.getByText('Spotify Moodboard');
    expect(aboutContentHeader).toBeInTheDocument();

    const aboutContentParagraph = screen.getByText('With Spotify Moodboard you can create a visual representation of your favorite music with a theme that best matches your music taste. Generated from your top music genre, the theme consists of the background pictures used, font, and color scheme.');
    expect(aboutContentParagraph).toBeInTheDocument();

    const aboutContentLoginHeader = screen.getByText('Log in with a different account');
    expect(aboutContentLoginHeader).toBeInTheDocument();

    const aboutContentLoginParagraph = screen.getByText('If you\'d like to log in with a different account, open Spotify in your web browser and log out there. Once logged out of Spotify, you can log back in using a different account.');
    expect(aboutContentLoginParagraph).toBeInTheDocument();

    const aboutContentPrivacyHeader = screen.getByText('Privacy');
    expect(aboutContentPrivacyHeader).toBeInTheDocument();

    const aboutContentPrivacyParagraph = screen.getByText('None of your info is saved. Each time you log in, Spotify Moodboard makes a new request to Spotify to display your music info!');
    expect(aboutContentPrivacyParagraph).toBeInTheDocument();

});