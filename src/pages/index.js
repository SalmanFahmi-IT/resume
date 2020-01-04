import React from "react";
import { 
    Header,
    Footer
} from '../components';
import { 
    Home,
    About,
    Experiences,
    Work,
    Contact 
} from '../sections';

export default function(){
    return(
        <React.Fragment>
            <Header />
            <div className='main'>
                <Home />
                <About />
                <Experiences />
                <Work />
                <Contact />
                <Footer />
            </div>
        </React.Fragment>
    );
}
