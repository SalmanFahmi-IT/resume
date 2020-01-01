import React from "react"

export default function Experiences(props){
    return(
        <section className='Experiences' id='Experiences'>
            <div className='container'>
                <h1 className='section-title'>Where I've Worked</h1>
                <div className='row'>
                    <div className='col-4'>
                        <ul className='tablinks'>
                            <li className='active'>Saham IT</li>
                            <li>Altados</li>
                            <li>Aerotechnic industries SA</li>
                            <li>EBS Maroc</li>
                            <li>DMS-Vision Group</li>
                            <li>Info ++</li>
                        </ul>
                    </div>
                    <div className='col-8'>
                        <div className='tab-content'>
                            <div className='tabpane'>
                                Saham IT
                            </div>
                            <div className='tabpane'>
                                Altados
                            </div>
                            <div className='tabpane'>
                                EBS
                            </div>
                            <div className='tabpane'>
                                Air France
                            </div>
                            <div className='tabpane'>
                                DMS
                            </div>
                            <div className='tabpane'>
                                Info ++
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}