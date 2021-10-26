import { render, screen } from "@testing-library/react";
import Popup from "../Popup";
import '@testing-library/jest-dom/extend-expect';

/* When Popup is rendered with no props passed in, nothing should be displayed. */
test('default render of Popup displays nothing.', async () => {
    render(<Popup/>);

    const closeButton = screen.queryByText('Close');
    expect(closeButton).not.toBeInTheDocument();

    const footerMsg = screen.queryByText('Made by Sydney. Questions/Concerns email me at vcssydneye5 at gmail.');
    expect(footerMsg).not.toBeInTheDocument();

    const popupContent = screen.queryByTestId('popup-content');
    expect(popupContent).not.toBeInTheDocument();
});

/* When Popup is rendered with props trigger set to true, the popup should be displayed with both buttons
   but the Popup should contain no content. */
test('popup displays when trigger is set to true and no content is given.', async () => {
    render(<Popup trigger={true}/>);
    
    const closeButton = screen.getByText('Close');
    expect(closeButton).toBeInTheDocument();

    const footerMsg = screen.getByText('Made by Sydney. Questions/Concerns email me at vcssydneye5 at gmail.');
    expect(footerMsg).toBeInTheDocument();
    
    const popupContent = screen.queryByTestId('popup-content');
    expect(popupContent).not.toBeInTheDocument();
});
/* When Popup is rendered with props trigger set to false and content passed in, nothing is displayed. */
test('popup is not shown when trigger is set to false and content is passed in.', () => {
    render(<Popup trigger={false} content={<div data-testid="popup-content"><h2>Oh HI</h2><p> testing in progress.</p></div>}/>);

    const closeButton = screen.queryByText('Close');
    expect(closeButton).not.toBeInTheDocument();

    const footerMsg = screen.queryByText('Made by Sydney. Questions/Concerns email me at vcssydneye5 at gmail.');
    expect(footerMsg).not.toBeInTheDocument();

    const popupContent = screen.queryByTestId('popup-content');
    expect(popupContent).not.toBeInTheDocument();

});

/* When Popup is rendered with props trigger set to true, the popup should be displayed with both buttons
   as well as the content that was passed in. */
test('popup displays when trigger is set to true and content is given.', async () => {
    render(<Popup trigger={true} content={<div data-testid="popup-content"><h2>Oh HI</h2><p> testing in progress.</p></div>}/>);
    
    const closeButton = screen.getByText('Close');
    expect(closeButton).toBeInTheDocument();

    const footerMsg = screen.getByText('Made by Sydney. Questions/Concerns email me at vcssydneye5 at gmail.');
    expect(footerMsg).toBeInTheDocument();
    
    const popupContent = screen.getByTestId('popup-content');
    expect(popupContent).toBeInTheDocument();
});