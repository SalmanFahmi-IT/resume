import React from "react";
import { Link } from 'gatsby';

export default function Header() {
    const [active, setActive] = React.useState(false);
    const toggle = () => {
        setActive(!active);
    };
    const activeClass = active ? 'active-menu' : '';
    return(
    <header>
            <Link to="/">
                <img src="/logo-sf.png" width='58px' alt="freeCodeCamp logo" />
            </Link>
            <nav className="navbar">
                <ul className="nav-links">
                    <li className="nav-item"><Link to="#about">About</Link></li>
                    <li className="nav-item"><Link to="#skills">Skills</Link></li>
                    <li className="nav-item"><Link to="#work">Work</Link></li>
                    <li className="nav-item"><Link to="#contact">Contact</Link></li>
                </ul>
            </nav>
            <div className={`menu ${activeClass}`}>
                <button onClick={toggle} className='toggle-nav'>
                    <i className="fa fa-close" />
                </button>
                <ul>
                    <li className="nav-item"><Link to="#about">About</Link></li>
                    <li className="nav-item"><Link to="#experiences">Experiences</Link></li>
                    <li className="nav-item"><Link to="#work">Works</Link></li>
                    <li className="nav-item"><Link to="#contact">Contact</Link></li>
                </ul>
            </div>
            <button onClick={toggle} className='toggle-nav'>
                <i className="fa fa-bars" />
            </button>
    </header>
    );
};
