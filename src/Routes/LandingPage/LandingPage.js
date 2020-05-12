import React, {Component} from 'react'
import heroImage from '../../Media/PortfolioPicture.png'
import '../../Style/style.css'
import './Landing.css'

class LandingPage extends React.Component {
    render() {
        return (
            <>   
                <section className="mainContent">
                    <h1 className="landingPageHeader">Developer / Designer </h1>
                    <span className="heroImage">
                    <img src={heroImage} alt="Hero Image of Mike Micek" width="300px"/>
                    </span>
                    <span className="languagesKnown">
                        <p>Front-End Languages</p> 
                    </span>
                    <span className="languagesKnown">
                        <p>Back-End Languages</p>
                    </span>
                </section>
            </>
        );
    }
}
export default LandingPage