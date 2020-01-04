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
            <div className={`menu ${activeClass}`}>
                <button onClick={toggle} className='toggle-nav'>
                    <i className="fa fa-close" />
                </button>
                <ul>
                    <li className="nav-item"><Link to="#about">About</Link></li>
                    <li className="nav-item"><Link to="#skills">Experiences</Link></li>
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
