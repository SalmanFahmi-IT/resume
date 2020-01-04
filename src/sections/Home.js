import React from "react";

export default function Home(props){
    return(
        <section className='home' id='home'>
            <div className='container'>
                <div className="row">
                    <div className="col-12">
                        <h1 className='enter'>Hello, my name is</h1>
                        <h2 className='title'>Fahmi Salman.</h2>
                        <h3 className='subtitle mb-4'>I build things for the web.</h3>
                        <p className='description mb-4'>
                            I'm a software engineer based in Boston, MA specializing in building (and occasionally designing) exceptional, high-quality websites and applications.
                        </p>
                        <button className='btn'>Resume</button>
                    </div>
                </div>
                
            </div>
        </section>
    );
}
