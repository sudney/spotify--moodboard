import { screen,render } from "@testing-library/react";
import ImageCreditGrid from "../ImageCreditGrid";
import '@testing-library/jest-dom/extend-expect';
import {theme} from '../../../../__test__/mock_objs';

test('all Content in ImageCreditGrid is displayed',() => {
    render(<ImageCreditGrid themeImages={theme.background_imgs}/>)
    
    const ImageCreditHeader = screen.getByText(/Image Credits/i);
    expect(ImageCreditHeader).toBeInTheDocument();

    const ImageCreditBlurb = screen.getByText(/None of these photos are mine. I found most of them on Pinterest. Click on the image to be taken to where it was sourced./i);
    expect(ImageCreditBlurb).toBeInTheDocument();

    const ImageCreditPictureArray = screen.queryAllByAltText(/^background subpart [0-7]$/i);
    expect(ImageCreditPictureArray).toHaveLength(8);
});
