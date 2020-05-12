import React from 'react';
import PortfolioContext from '../../Context/PortfolioContext'
import '../../Style/style.css'

class Portfolio extends React.Component {
    static defaultProps = {

    }
    constructor(props) {
        super (props);
    }
    static contextType = PortfolioContext;
    render() {
        return (
            <section className="mainContent">
                <h1>Portfolio</h1>
                <hr />
                <p>
                    <em>[Placeholder for Chicago Quiz App Image]</em>
                </p>
                <hr />
                <p>
                    <em>[Placeholder for Star Trek Engage! App Image]</em>
                </p>
                <hr />
                <p>
                    <em>[Placeholder for Beer N' Donuts App Image]</em>
                </p>
            </section>
        );
    }
}

export default Portfolio