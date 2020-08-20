import React from 'react';

import './Contact.css';

const Contact = () => {
    return(
        <div className="contact">
            <div className="header">
                Contact
            </div>
            <div className="content-contact">
                <div />
                <ul className="centered-list">
                    <li>Tlf: +47 48210139</li>
                    <li>Email: rykkje.kristian@gmail.com</li>
                    <li><a href="https://github.com/KristianRykkje">GitHub</a></li>
                </ul>
                <div />
            </div>
        </div>
    );
}

export default Contact;