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
                    <h3>Beer N' Donuts</h3>
                    <div>
                        <img src={beerNDonutImage} className="projectImage" width="500px" alt="Beer N' Donut App Screenshot"/>
                    </div>
                    <p>
                        This app helps you navigate the world of beer and donut pairings. This niche perfectly combines two amazing things... Great craft beer and yummy donuts! Use the simple pairing app to learn what donut goes best with the beer you are drinking!
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
                    <h3>Star Trek Engage!</h3>
                    <div>
                        <img src={starTrekEngageImage} className="projectImage" width="500px" alt="Star Trek Engage App Screenshot"/>
                    </div>
                    <p>
                        Star Trek Engage is a web application designed as an aid to to players of the Star Trek tabletop role playing game (TTRPG) character creation process. This app will take the user (player) through each step involved in the process of making their character.
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
                    <h3>Beer Across America</h3>
                    <div>
                        <img src={beerAcrossAmericaImage} className="projectImage" width="500px" alt="Beer Across America App Screenshot"/>
                    </div>
                    <p>
                        As a lover of craft beer and of the variety of styles that can be found around the United States, I wanted to create a web app that allows others to find local breweries in their city. Users can search for any number of breweries in their city (up to 50 at a time) and learn where the brewery is located.
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