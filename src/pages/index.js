import React from "react";
import { 
    Header,
    Footer
} from '../components';
import { 
    Home,
    About,
    Skills,
    Work,
    Contact 
} from '../sections';

export default function(){
    return(
        <React.Fragment>
            <Header />
            <Home />
            <About />
            <Skills />
            <Work />
            <Contact />
            <Footer />
        </React.Fragment>
    );
}
