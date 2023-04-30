//? REACT
import React, { useRef, useEffect } from 'react';

//? IMAGES
const gmail_logo = require('../assets/gmail-icon.svg').default;
const github_logo = require('../assets/github-icon.svg').default;
const linkedin_logo = require('../assets/linkedin-icon.svg').default;

const logos = [
    {
        gmail: [
            gmail_logo,
            'mailto:burnsc0942@gmail.com'
        ]
    },
    {
        github: [
            github_logo,
            'https://github.com/Cameron0942'
        ]
    },
    {
        linkedin: [
            linkedin_logo,
            'https://www.linkedin.com/in/cameron--burns/'
        ]
    }
];

const Contact = () => {

    return (
        <>
            <div id='contact' style={{textAlign: 'center', width: '60ch', margin: '0 auto', borderBottom: '2px black solid'}}>
                <h1 style={{color: '#F7F7F7', fontSize: '2.5rem', textShadow: '1px 1px black', textDecoration: 'underline', textDecorationThickness: '2px', textUnderlineOffset: '10px', textDecorationColor: '#ba2649'}}>How do you do?</h1>
                <h2 style={{color: '#9d9ea8', textShadow: '1px 1px black'}}>Let's get in touch</h2>
                <p style={{color: '#F7F7F7', marginBottom: 18, fontSize: '1.5rem', textShadow: '1px 1px black'}}>I'm actively looking for new opportunities. But even if you don't have a job offer for me, I'd appreciate if you pass by just to say hi! Also, don't hesitate in letting me know any feedback or recommendations you have.</p>
                <div style={{display: 'flex', justifyContent: 'space-evenly', marginBottom: 30}}>
                    {logos.map((linkInfo) => {
                        let bundle = linkInfo[Object.keys(linkInfo)];
                        let svg = bundle[0]
                        let link = bundle[1];
                        return (<a href={link} target="_blank"  rel="noreferrer"><img src={svg} alt={linkInfo[Object.keys(linkInfo)]} style={{padding: 0, backgroundColor: 'white', borderRadius: '10px'}}></img></a>)
                    })}
                </div>
            </div>
            
            
        </>
    );
};

export default Contact;