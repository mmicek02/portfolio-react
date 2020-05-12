import React, { Component }  from 'react';
import { Route } from 'react-router-dom';
import NavBar from '../Components/NavBar/NavBar';
import LandingPage from '../Components/LandingPage/LandingPage';
import Portfolio from '../Components/Portfolio/Portfolio';
import AboutMe from '../Components/AboutMe/AboutMe';


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
