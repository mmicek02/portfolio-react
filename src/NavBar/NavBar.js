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
                <a href="/" class="logo">Michael Micek</a>
                <input class="menu-btn" type="checkbox" id="menu-btn" />
                <label class="menu-icon" for="menu-btn"><span class="nav-icon"></span></label>
                <ul class="menu">
                    <li><a href="#dont">Home</a></li>
                    <li><a href="#forget">About Me</a></li>
                    <li><a href="#forget">Portfolio</a></li>
                </ul>
            </nav>
        )
    }
}
export default NavBar