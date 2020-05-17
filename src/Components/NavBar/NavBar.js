import React from 'react'
import './NavBar.css'

class NavBar extends React.Component {

    render() {
        return (
            <nav className="navbar">
                <a href="/" className="logo">Michael Micek</a>
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" htmlFor="menu-btn"><span className="nav-icon"></span></label>
                <ul className="menu">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about-me">About Me</a>    
                    </li>
                    <li>
                        <a href="/portfolio">Portfolio</a>
                    </li>
                    <li>
                        <a href="/about-me#footer">Contact Me</a>
                    </li>
                </ul>
            </nav>
        )
    }

}
export default NavBar