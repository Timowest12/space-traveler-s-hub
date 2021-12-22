import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Missions from './components/missions/missions';
import RocketCard from './components/RocketCard';
import store from './pages/configureStore';
import MyProfile from './pages/MyProfile';

test('renders learn react link', () => {
  render(<Provider store={store}><Missions /></Provider>);
  const linkElement = screen.getByText(/mission/i);
  expect(linkElement).toBeInTheDocument();
});
test('test if myprofile renders succesfully', () => {
  render(<Provider store={store}><MyProfile /></Provider>);
  const linkElement = screen.getByText(/mission/i);
  expect(linkElement).toBeInTheDocument();
});
test('test if rockets succesfully executes', () => {
  render(<Provider store={store}><MyProfile /></Provider>);
  const linkElement = screen.getByText(/Rockets/i);
  expect(linkElement).toBeInTheDocument();
});
test('see if rocketcard renders succesfully', () => {
  const mockdata = {
    data: {
      id: 23, flickr_images: 'logo192.png', rocket_name: 'falconHeavy', reserved: 'true', description: 'falcan X heavy launcher',
    },
  };
  render(<Provider store={store}><RocketCard data={mockdata} /></Provider>);
  const linkElement = screen.getByText(/rocket/i);
  expect(linkElement).toBeInTheDocument();
});
