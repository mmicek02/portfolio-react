import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from '../../Components/LandingPage/LandingPage';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');

  // render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(
  <BrowserRouter>
    <LandingPage />
  </BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});
