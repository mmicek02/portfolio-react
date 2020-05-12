import React, { Component }  from 'react';
import { Route } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import LandingPage from '../src/LandingPage/LandingPage';
import Portfolio from './Portfolio/Portfolio';
import AboutMe from './AboutMe/AboutMe';


class App extends Component {
  renderNavBar() {
    return (
      <>
        <NavBar />
      </>
    )
  }
  renderMainRoutes() {
    return (
      <>
        <Route 
          exact 
          path='/' 
          component={LandingPage} />

        <Route 
          exact 
          path='/portfolio' 
          component={Portfolio} />  

        <Route 
          exact 
          path='/about-me' 
          component={AboutMe} />
      </>
    )
  }
  render() {
    return (
      <>
      <div className="App">
        {this.renderNavBar()}
        {this.renderMainRoutes()}
      </div>
      </>
    );
  }
}

export default App;
