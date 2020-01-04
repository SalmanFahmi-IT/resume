import React from "react"
import Fade from 'react-reveal';

export default function About(props){
    return(
        <section className='about' id='about'>
            <div className='container'>
                <Fade left>
                <h1 className='section-title'>About</h1>
                <div className="row">
                    <div className="col-6">
                        <p>
                        Hello! I'm Salman, a software engineer based in Morocco,Casablanca, MA who enjoys building things that live on the internet. I develop exceptional websites and web apps that provide intuitive, pixel-perfect user interfaces with efficient and modern backends.
                        Shortly after graduating from Northeastern University, I joined the engineering team at Upstatement where I work on a wide variety of interesting and meaningful projects on a daily basis.
                        Here are a few technologies I've been working with recently:
                        </p>
                        <ul className="about-skills">
                            <li>Html / CSS / JS</li>
                            <li>Typescript</li>
                            <li>ReactJs</li>
                            <li>Angular 2+</li>
                            <li>.NET</li>
                            <li>JAVA</li>
                            <li>SpringBoot</li>
                            <li>NodeJs</li>
                            <li>Laravel</li>
                            <li>Wordpress</li>
                            <li>Magento</li>
                            <li>Gatsby</li>
                        </ul>
                    </div>
                    <div className="col-6">
                        <img src="/me.jpg" alt='Salman' className="img-profil"/>
                    </div>
                </div>
                </Fade>
            </div>
        </section>
    );
}
