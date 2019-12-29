import React from "react"

export default function About(props){
    return(
        <section className='footer' id='footer'>
            <div className='container'>
                <img src="/logo-sf.png" width='58px' alt="freeCodeCamp logo" />
                <p>Resume &copy; Designed by Fahmi Salman</p>
                <ul className='social-links'>
                    <li><i className="fa fa-github" /></li>
                    <li><i className="fa fa-linkedin" /></li>
                    <li><i className="fa fa-facebook" /></li>
                    <li><i className="fa fa-twitter" /></li>
                </ul>
            </div>
        </section>
    );
}