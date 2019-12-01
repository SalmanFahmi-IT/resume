import React from "react";
import { Link } from 'gatsby';

export default () => (
    <header>
        <div className='container'>
            <nav className="navbar">
                <Link to="https://freecodecamp.org">
                <img src="https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg" alt="freeCodeCamp logo" />
                </Link>
                <ul className="nav-links">
                    <li className="nav-item"><Link to="#">Home</Link></li>
                    <li className="nav-item"><Link to="#">About</Link></li>
                    <li className="nav-item"><Link to="#">Skills</Link></li>
                    <li className="nav-item"><Link to="#">Work</Link></li>
                    <li className="nav-item"><Link to="#">Contact</Link></li>
                </ul>
            </nav>
        </div>
    </header>
);
