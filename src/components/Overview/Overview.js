import React from 'react';

import './Overview.css';

import html5 from '../../images/html5-logo.png';
import css3 from '../../images/css3-logo.png';
import javascript from '../../images/javascript-logo.png';
import json from '../../images/json-logo.png';
import nodejs from '../../images/nodejs-logo.png';
import npm from '../../images/npm-logo.png';
import react from '../../images/react-logo.png';
import postgresql from '../../images/postgresql-logo.png';
import python from '../../images/python-logo.png';
import maple from '../../images/maple-logo.png';
import matlab from '../../images/matlab-logo.png';
import csharp from '../../images/c-sharp-logo.png';
import GoogleAnalytics from '../../images/GoogleAnalytics.png';
import redux from '../../images/redux-logo.png';
import GitHub from '../../images/GitHub-logo.png';
import sass from '../../images/sass-logo.png';
import MongoDB from '../../images/MongoDB.png';
import Passportjs from '../../images/Passportjs.png';
import Stripe from '../../images/Stripe.png';


const Overview = () => {
    return (
        <div className="overview">
            <h1>What I know</h1>
            <div className="img-list">
                <img className="img" src={html5} alt="" />
                <img className="img" src={css3} alt="" />
                <img className="img" src={javascript} alt="" />
                <img className="img" src={json} alt="" />
                <img className="img" src={nodejs} alt="" />
                <img className="img" src={npm} alt="" />
                <img className="img" src={react} alt="" />
                <img className="img" src={postgresql} alt="" />
                <img className="img" src={python} alt="" />
                <img className="img" src={maple} alt="" />
                <img className="img" src={matlab} alt="" />
                <img className="img" src={csharp} alt="" />
                <img className="img" src={GoogleAnalytics} alt="" />
                <img className="img" src={redux} alt="" />
                <img className="img" src={GitHub} alt="" />
                <img className="img" src={MongoDB} alt="" />
                <img className="img" src={sass} alt="" />
                <img className="img" src={Passportjs} alt="" />
                <img className="img" src={Stripe} alt="" />
            </div>
        </div>
    );
}

export default Overview;