import React from "react"

export default function About(props){
    return(
        <div className='footer' id='footer'>
            <div className='container'>
                <img src="/logo-sf.png" width='58px' alt="freeCodeCamp logo" />
                <div>Resume &copy; Designed by Fahmi Salman</div>
                <ul className='social-links'>
                    <li><i className="fa fa-github" /></li>
                    <li><i className="fa fa-linkedin" /></li>
                    <li><i className="fa fa-facebook" /></li>
                    <li><i className="fa fa-twitter" /></li>
                </ul>
            </div>
        </div>
    );
}