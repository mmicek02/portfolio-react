import React, { Component }  from 'react';
import { Route } from 'react-router-dom';
import NavBar from '../Components/NavBar/NavBar';
import ContactMe from '../Components/ContactMe/ContactMe'
import LandingPage from '../Routes/LandingPage/LandingPage';
import PortfolioPage from '../Routes/PortfolioPage/PortfolioPage';
import AboutMePage from '../Routes/AboutMePage/AboutMePage';


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
          component={PortfolioPage} />  

        <Route 
          exact 
          path='/about-me' 
          component={AboutMePage} />
        
        <Route
          exact
          path='/about-me#footer'
          component={AboutMePage} />
      </>
    )
  }
  renderFooter() {
    return(      
      <>
        <ContactMe />
      </>
    )
  }
  render() {
    return (
      <>
      <div className="App">
        {this.renderNavBar()}
        {this.renderMainRoutes()}
        {/* {this.renderFooter()} */}
      </div>
      </>
    );
  }
}

export default App;
