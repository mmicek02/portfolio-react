import React from 'react'
import NavBar from '../NavBar/NavBar'

class LandingPage extends React.Component {
    render() {
        return (
            <>
                <h1>Michael Micek</h1>
                <section>
                    <NavBar />
                </section>
                <section className="aboutMe">
                    <h2>About Me</h2>
                    <p>This is a paragraph about me.</p>
                </section>

            </>
        )
    }
}
export default LandingPage