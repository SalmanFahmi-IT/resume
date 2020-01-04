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
                        <ul className='tablinks'>
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
                        </ul>
                    </div>
                    <div className='col-8'>
                        <div className='tab-content'>
                           <div className='tabpane'>
                                <h4>{ExperiencesData[currentTab].title} @ {ExperiencesData[currentTab].company}</h4>
                                <h6>{ExperiencesData[currentTab].date}</h6>
                                <p>{ExperiencesData[currentTab].description}</p>
                                <p><strong>Method:</strong> {ExperiencesData[currentTab].method}</p>
                                <p><strong>Skills:</strong> {ExperiencesData[currentTab].skills}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}