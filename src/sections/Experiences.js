import React from "react"
import { TabLink } from '../components';
import ExperiencesData from '../data/experiences.json';

export default function Experiences(props){
    const [currentTab, setCurrentTab] = React.useState(0);
    console.log('ExperiencesData', ExperiencesData[currentTab].description, 'currentTab', currentTab)
    return(
        <section className='experiences' id='experiences'>
            <div className='container'>
                <h1 className='section-title'>Where I've Worked</h1>
                <div className='row'>
                    <div className='col-4'>
                        <div className='tablinks'>
                            {
                                ExperiencesData.map((exp, index) => {
                                    return <TabLink 
                                        key={index}
                                        setCurrentTab={setCurrentTab}
                                        index={index}
                                        isSelected= { currentTab === index}
                                        text={exp.company}
                                    />
                                })
                            }
                        </div>
                    </div>
                    <div className='col-8'>
                        <div className='tab-content'>
                           <div className='tabpane'>
                                <h4>{ExperiencesData[currentTab].title} @ 
                                    <span className='theme-color'>
                                        {ExperiencesData[currentTab].company} 
                                    </span>
                                </h4> 
                                <p className='theme-color lighter'>
                                    {ExperiencesData[currentTab].date}
                                </p>
                                <div className='desc'>
                                    <h5>Description :</h5>
                                    <p>{ExperiencesData[currentTab].description}</p>
                                </div>
                                <h5>Skills :</h5>
                                <p>{ExperiencesData[currentTab].skills}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}