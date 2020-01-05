import React from "react";

export default function Contact(props){
    return(
        <section className='contact' id='contact'>
            <div className='container'>
                <h1 className='section-title'>Contact</h1>
                <div className='row'>
                    <div className='col-4'>
                        <ul className='lighter'>
                            <li><i className='fa fa-envelope' /> fahmi.salmn@gmail.com</li>
                            <li><i className='fa fa-phone' /> fahmi.salmn@gmail.com</li>
                            <li><i className='fa fa-map' /> fahmi.salmn@gmail.com</li>
                            <li><i className='fa fa-link' /> fahmi.salmn@gmail.com</li>
                        </ul>
                    </div>
                    <div className='col-8'>
                        <form>
                            <input type='text' placeholder='Email'/>
                            <input type='text' placeholder='Phone'/>
                            <input type='text' placeholder='Website'/>
                            <textarea rows='5' placeholder='Message'></textarea>
                            <button type='submit' className='btn'>Send message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
