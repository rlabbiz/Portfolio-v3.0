import React, {
    useState,
    useRef,
} from 'react';

import './Header.css';
import { Link } from 'react-router-dom';
import Logo from './logo.png';
import SunMode from './sun.png';
import MoonMode from './moon.png';

export const Header = () => {

    const [darkMode, setDarkMode] = useState(false);
    const darkLink = useRef();

    // Handle Dark Mode
    const handleDarkMode = () => {
        if(darkMode) {
            document.body.classList = 'light-mode';
            setDarkMode(false);
            darkLink.current.src = MoonMode;
        } else {
            document.body.classList = 'dark-mode';
            setDarkMode(true);
            darkLink.current.src = SunMode;
        }
    }

    return (
        <div className="header container">
            <div className="logo">
                <img src={Logo} alt="Rlabbiz's Logo"  width="150px"  />
            </div>

            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
            
            <div className="dark-link">
                <img ref={darkLink} src={MoonMode} alt="Switch Mode's Icon" onClick={handleDarkMode} />
            </div>
        </div>
    )
}