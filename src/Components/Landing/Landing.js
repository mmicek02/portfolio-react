import React, {Component} from 'react'
import '../../Style/style.css'
import './Landing.css'

class Landing extends React.Component {
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
                    </span>
                    <span className="languagesKnown">
                        <p>Back-End Languages</p>
                    </span>
                </section>
            </>
        );
    }
}
export default Landing