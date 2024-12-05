import React, {
    useState,
    useRef,
} from 'react';

import './Header.css';
import { Link } from 'react-router-dom';
import Logo from './logo.png';
import SunMode from './sun.png';
import MoonMode from './moon.png';

export const Header = (props) => {
    console.log(props);
    return (
        <div className="header container">
            <div className="logo">
                <img src={Logo} alt="Rlabbiz's Logo"  width="150px"  />
            </div>

            <div className="links">
                <Link to="/">{props.data?.header?.home}</Link>
                <Link to="/about">{props.data?.header?.about}</Link>
                <Link to="/contact">{props.data?.header?.contact}</Link>
            </div>

            <SwitchModes obj={props.languageObj} />
        </div>
    )
}

const SwitchModes = ({ obj }) => {
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
        <div className="last-links">
            <img src={MoonMode} alt="Sun Mode" ref={darkLink} onClick={handleDarkMode} />
            <div className="language">
                <span onClick={obj.handleLanguageSwitch}>{obj.language === 'en' ? "Fr" : "En" }</span>
            </div>
        </div>
    )
}

