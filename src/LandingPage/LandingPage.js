import React from 'react'
import '../Style/style.css'
import './LandingPage.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faHtml5, faCss3Alt, faJsSquare, faReact, faNode } from '@fortawesome/free-brands-svg-icons'

class LandingPage extends React.Component {
    
    render() {
        return (
            <>
                <section className="mainContent">
                    <h1>Michael Micek</h1>
                    <h2>Developer / Designer </h2>
                    <span className="heroImage">
                        <p><em>[Placeholder for main image]</em></p>
                    </span>
                    <span className="languagesKnown">
                        <p>Front-End Languages</p>
                            <ul>
                                <li>
                                    <FontAwesomeIcon 
                                        icon={faHtml5}
                                        className="langIcon html"
                                        alt='HTML 5'/> 
                                    {/* <g className="fa-group">
                                        <path
                                            fill="currentColor"
                                            d="M376 144a16 16 0 1 0 16 16 16 16 0 0 0-16-16zm80 0a16 16 0 1 0 16 16 16 16 0 0 0-16-16zM131.06 273.53L192 304l-23.52-70.56a192.06 192.06 0 0 0-37.42 40.09zM256 272v-77.11a198.62 198.62 0 0 0-43.15 12.38z"
                                            className="fa-primary"
                                        ></path>
                                    </g>  */}
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faCss3Alt}/>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faJsSquare}/>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faReact}/>
                                </li>
                            </ul>
                    </span>
                    <span className="languagesKnown">
                        <p>Back-End Languages</p>
                            <ul>
                                <li>
                                    <FontAwesomeIcon icon={faNode}/>
                                </li>
                                <li>Express</li>
                                <li>
                                    <FontAwesomeIcon icon={faDatabase}/> SQL
                                </li>
                            </ul>
                    </span>
                </section>
            </>
        );
    }
}
export default LandingPage;