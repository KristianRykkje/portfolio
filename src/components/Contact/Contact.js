import React from 'react';

import './Contact.css';

const Contact = () => {
    return(
        <div className="contact">
            <h1 className="header">
                Contact
            </h1>
            <div className="content-contact">
                <div />
                <ul className="centered-list">
                    <li>Tlf: +47 48210139</li>
                    <li>Email: kriryk@gmail.com</li>
                    <li><a href="https://github.com/KristianRykkje">GitHub</a></li>
                </ul>
                <div />
            </div>
        </div>
    );
}

export default Contact;