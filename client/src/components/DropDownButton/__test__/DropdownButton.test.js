import {render, screen} from '@testing-library/react';
import { DropdownButton } from '../DropdownButton';
import '@testing-library/jest-dom/extend-expect';
import {theme} from '../../../__test__/mock_objs';
import userEvent from '@testing-library/user-event';
 

const mockChangeAuth = jest.fn(() => true);
test('dropdown button displays without crashing.', () => {
    render(<DropdownButton/>);
    screen.getByRole('button', {name: 'Account'});
});

test('when dropdown button is clicked menu containing 3 btns is displayed.',async () => {
    render(<DropdownButton isAuth={mockChangeAuth} themeImages={theme} />);
    
    userEvent.click(screen.getByRole('button'));
    expect(screen.getByText('Image Credits')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Log out')).toBeInTheDocument();

});

const mockImageCreditGrid = jest.fn();
jest.mock("../ImageCreditGrid/ImageCreditGrid", () => (props) => {
  mockImageCreditGrid(props);
  return <mock-ImageCreditGrid />;
});

test('when Image Credits btn is clicked Images Credit component is called.', () => {
    render(<DropdownButton isAuth={mockChangeAuth} themeImages={theme} />);
    
    userEvent.click(screen.getByRole('button'));
    userEvent.click(screen.getByText('Image Credits'));
    expect(mockImageCreditGrid).toHaveBeenCalledWith(
        expect.objectContaining({
          themeImages: theme,
        })
      );
});


test('when About btn is clicked AboutContent component is called.', () => {
    render(<DropdownButton isAuth={mockChangeAuth} themeImages={theme} />);
    
    userEvent.click(screen.getByRole('button'));
    userEvent.click(screen.getByText('About'));
    expect(screen.getByText('Log in with a different account')).toBeInTheDocument();
});

/** add test to check that the logout button works correctly. */