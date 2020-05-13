import React from 'react'
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
                    <img src={heroImage} alt="Mike Micek" width="300px"/>
                    </span>
                    <span className="languagesKnown">
                        <p>Front-End Languages</p>
                    </span>
                    <span className="languagesKnownList">
                            <ul>
                                <li>HTML 5</li>
                                <li>CSS 3</li>
                                <li>JavaScript</li>
                                <li>React</li>
                            </ul>
                        </span>
                    <span className="languagesKnown">
                        <p>Back-End Languages</p>
                    </span>
                    <span className="languagesKnownList">
                            <ul>
                                <li>Node</li>
                                <li>Express</li>
                                <li>PostgreSQL</li>
                            </ul>
                        </span>
                </section>
            </>
        );
    }
}
export default LandingPage