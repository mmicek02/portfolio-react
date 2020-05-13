import React from 'react';
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
                    I've come a long way in a very short time and have learned by doing (and love that process). I work 
                    very hard to develop clear clean code and always push myself to improve.
                </p>
                <p>
                    When I am not coding, I am designing quick and fun board games for my friends and I to play, or 
                    attempting a new homebrew beer recipe.
                </p>
                <div className="heroImage">
                    <img src={heroImage} alt="Mike Micek" width="300px"/>
                </div>
                <footer>
                    <div class="contactInfo">
                        <ul>
                            <li>
                                <a href="mailto:micekmichael@gmail.com" target="_blank">Email Me</a>
                            </li>
                            <li>
                                <a href="https://github.com/mmicek02" target="_blank">View my Github</a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/michaelmicek/" target="_blank">Visit my LinkedIn</a>
                            </li>
                        </ul>
                    </div>
                </footer>
        </div>
        );
    }
}

export default AboutMePage