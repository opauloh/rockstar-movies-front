import React from 'react';
import Logo from '../../Assets/logo-white.png';
import { Link } from 'react-router-dom';

export const Header = () => (
    <nav>
        <div className="nav-wrapper blue darken-2">
            <div className="container ">
                <Link to="/" className="left brand-logo" style={{ paddingTop: 2 }}>
                    <img alt="RockstarMovies.com" src={Logo} />
                </Link>
                <ul id="nav-mobile" className="right">
                    <li><a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.notion.so/Rockstar-Coders-Challenge-95d0a15e15ec44fb9ab21148df753304">Docs</a></li>
                    <li><a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/opauloh/rockstar-movies-front">GitHub</a></li>
                </ul>
            </div>
        </div>
    </nav>
)