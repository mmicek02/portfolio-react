import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

class NavBar extends React.Component {
    handleToggle() {
        console.log('Hamburger Clicked')
    }

    render() {
        return (
            <nav className="navbar">
                <Link to="/" className="logo">Michael Micek</Link>
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" htmlFor="menu-btn"><span className="nav-icon"></span></label>
                <ul className="menu">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about-me">About Me</Link>    
                    </li>
                    <li>
                        <Link to="/portfolio">Portfolio</Link>
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