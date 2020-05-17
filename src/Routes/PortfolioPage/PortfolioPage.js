import React from 'react';
import '../../Style/style.css'
import './PortfolioPage.css'
import beerNDonutImage from '../../Media/BeerNDonuts.png'
import starTrekEngageImage from '../../Media/starTrek.png'
import beerAcrossAmericaImage from '../../Media/beerAcrossAmerica.png'
class PortfolioPage extends React.Component {

    render() {
        return (
            <section className="mainContent">
                <h1>Portfolio</h1>
                <hr />
                <div className="project">
                    <h2>Beer N' Donuts</h2>
                    <div>
                        <img src={beerNDonutImage} className="projectImage" width="500px" alt="Beer N' Donut App Screenshot"/>
                    </div>
                    <p className="projectDetails">
                        This app helps the user find the perfect donut pairing to go with their craft beer. I was inspired to develop this application after a beer and donut tasting event I went to at a local brewery. I wanted to create a tool that everyone would have access to, in order to discover fun and delicious pairings of different beers and donuts. My hope is that anyone interested in trying something new or someone who wants to step up their dinner party games would visit this app for inspiration. 
                    </p>
                    <p>
                        This App uses HTML, CSS, JS REACT, NODE, EXPRESS, and PostgreSQL
                    </p>
                    <div className="appLinks">
                        <ul>
                            <li><a href="https://github.com/mmicek02/BeerNDonutsApp">Front-End Repo</a></li>
                            <li><a href="https://github.com/mmicek02/BeerNDonutsApp-Server">Back-End Repo</a></li>
                            <li><a href="https://beerndonut-app.now.sh/">Live App</a></li>
                        </ul>
                    </div>
                </div>
                <div className="project">
                    <h2>Star Trek Engage!</h2>
                    <div>
                        <img src={starTrekEngageImage} className="projectImage" width="500px" alt="Star Trek Engage App Screenshot"/>
                    </div>
                    <p className="projectDetails">
                    I am a big fan of pen and paper role playing games like Dungeons and Dragons, Star Trek, Monster of the Week etc. I wanted to challenge myself to create an application that would help new people interested in playing a role playing like Star Trek, feel more comfortable doing so by streamlining the character creation process. This app helps a user create an account and a character for the Star Trek role playing game. It saves their characters so that they always have access to their crew. 
                    </p>
                    <p>
                        This App uses HTML, CSS, JS REACT, NODE, EXPRESS, and PostgreSQL
                    </p>
                    <div className="appLinks">
                        <ul>
                            <li><a href="https://github.com/mmicek02/star-trek-engage-client">Front-End Repo</a></li>
                            <li><a href="https://github.com/mmicek02/star-trek-engage-server">Back-End Repo</a></li>
                            <li><a href="https://star-trek-engage-client-app.now.sh/">Live App</a></li>
                        </ul>
                    </div>
                </div>
                <div className="project">
                    <h2>Beer Across America</h2>
                    <div>
                        <img src={beerAcrossAmericaImage} className="projectImage" width="500px" alt="Beer Across America App Screenshot"/>
                    </div>
                    <p className="projectDetails">
                        My wife and I like to travel and visit family members that are in different states around the USA. Whenever we travel we like to find local breweries to try. I created the app Beer Across America as a tool to help us have a more focused search when traveling. This app is beneficial for anyone in the USA who wants to find a new brewery or pub either in their home town or in a new city.
                    </p>
                    <p>
                        This App uses HTML, CSS, JAVASCRIPT, JQUERY and API REQUETS
                    </p>
                    <div className="appLinks">
                        <ul>
                            <li><a href="https://github.com/mmicek02/beerAcrossAmerica">Front-End Repo</a></li>
                            <li><a href="https://mmicek02.github.io/beerAcrossAmerica/">Live App</a></li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}

export default PortfolioPage