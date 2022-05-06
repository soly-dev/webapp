import {render, screen } from '@testing-library/react';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App';


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText("Press the botton to see new text");
  expect(linkElement).toBeInTheDocument();
});
Enzyme.configure({ adapter: new Adapter() });

// Testing to see if the new text show after button clicked
describe('Test Button component', () => {
 it('should show text when a button is clicked', () => {
   const wrapper = shallow(<App />);
   const button = wrapper.find('button');
   button.simulate('click');
   const text = wrapper.find('div h2');
   expect(text.text()).toBe('A bunch of new text');
 })
});