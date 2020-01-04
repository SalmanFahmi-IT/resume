import React from "react";
import { 
    Header,
    Footer
} from '../components';
import { 
    Cover,
    About,
    Skills,
    Work,
    Contact 
} from '../sections';

export default function(){
    return(
        <React.Fragment>
            <Header />
            <Cover />
            <About />
            <Skills />
            <Work />
            <Contact />
            <Footer />
        </React.Fragment>
    );
}
