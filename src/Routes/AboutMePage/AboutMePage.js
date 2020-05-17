import React from 'react';

import ContactMe from '../../Components/ContactMe/ContactMe'

import heroImage from '../../Media/PortfolioPicture.png'
import '../../Style/style.css';

class AboutMePage extends React.Component {
    render() {
        return (
            <div className="mainContent">
                <h1>About Me</h1>
                <p>
                    I am a web developer and recent graduate of the Web Developer Career Path bootcamp at Bloc. Web 
                    design has always been a passion of mine, and now I do it for a living. Creating interactive user 
                    experiences using inclusive design philosophies and properties is what wakes me up in the morning.
                </p>
                <p>
                    I've come a long way in a very short time and have learned by doing (and love that process). I work very hard to develop clear clean code and always push myself to improve. I am eager to become part of a team developers, and use the skills I have learned to help problem solve and add extra value not only to the Dev team but also the company as a whole. My skill set and familiarity with several program languages and OOP, allows me the ability to wear several hats when developing. 
                </p>
                <p>
                    When I am not coding, I am designing quick and fun board games for my friends and I to play, or 
                    attempting a new homebrew beer recipe.
                </p>
                <div className="heroImage">
                    <img src={heroImage} alt="Mike Micek" width="300px"/>
                </div>
                <div>
                    <ContactMe />
                </div>
        </div>
        );
    }
}

export default AboutMePage