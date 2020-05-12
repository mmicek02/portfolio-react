import React from 'react';
import ReactDOM from 'react-dom';
import Portfolio from '../../Components/Portfolio/Portfolio';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');

  // render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(
  <BrowserRouter>
    <Portfolio />
  </BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});
