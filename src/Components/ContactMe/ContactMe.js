import React from 'react'
import { Link } from 'react-router-dom'
import './ContactMe.css'

class ContactMe extends React.Component {

    render() {
        return (
            <footer className="bottomBar">
                <div className="blurb" id="footer">
                    <h3>Let's Connect!</h3> I would love to talk to you more about any projects you are interested in, new or already in development. Or if you have a good homebrew recipe. I would love to learn it and try it out myself.
                </div>
                <ul className='contactMenu'>
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
            </footer>
        )
    }
}
export default ContactMe