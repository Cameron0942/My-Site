//? REACT
import React, { useRef, useEffect } from 'react';

//? MATERIAL UI
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Tooltip from '@mui/material/Tooltip';

//? IMAGES
const gmail_logo = require('../assets/gmail-icon.svg').default;
const github_logo = require('../assets/github-icon.svg').default;
const linkedin_logo = require('../assets/linkedin-icon.svg').default;

//? Responsive
const theme = createTheme();

const logos = [
    {
        gmail: [
            gmail_logo,
            'mailto:burnsc0942@gmail.com',
            'Email Address'
        ]
    },
    {
        github: [
            github_logo,
            'https://github.com/Cameron0942',
            'GitHub Profile'
        ]
    },
    {
        linkedin: [
            linkedin_logo,
            'https://www.linkedin.com/in/cameron--burns/',
            'LinkedIn Profile'
        ]
    }
];

const Contact = () => {
    //* Responsive
    const isLg = useMediaQuery(theme.breakpoints.up('lg'));
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    const isSm = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <>
        <ThemeProvider theme={theme}>
            <div id='contact' style={{textAlign: 'center', maxWidth: '60ch', margin: '0 auto', paddingLeft: '5%', paddingRight: '1%', borderBottom: '2px black solid'}}>
                <h1 style={{color: '#F7F7F7', fontSize: isLg ? '2.5rem' : '2.0rem', textShadow: '1px 1px black', textDecoration: 'underline', textDecorationThickness: '2px', textUnderlineOffset: '10px', textDecorationColor: '#ba2649'}}>How do you do?</h1>
                <h2 style={{color: '#9d9ea8', fontSize: isLg ? 'auto' : '1.5rem', textShadow: '1px 1px black'}}>Let's get in touch</h2>
                <p style={{color: '#F7F7F7', marginBottom: 18, fontSize: isLg ? '1.5rem' : '1.2rem', textShadow: '1px 1px black'}}>I'm actively looking for new opportunities. But even if you don't have a job offer for me, I'd appreciate if you pass by just to say hi! Also, don't hesitate in letting me know any feedback or recommendations you have.</p>
                <div style={{ display: 'flex', justifyContent: 'space-evenly', marginBottom: 30}}>
                    {logos.map((linkInfo) => {
                        let bundle = linkInfo[Object.keys(linkInfo)];
                        let svg = bundle[0]
                        let link = bundle[1];
                        let desc = bundle[2]
                        return (<Tooltip title={desc}><a href={link} target="_blank"  rel="noreferrer"><img src={svg} alt={linkInfo[Object.keys(linkInfo)]} style={{padding: 0, backgroundColor: 'white', borderRadius: '10px'}}></img></a></Tooltip>)
                    })}
                </div>
            </div>
            
        </ThemeProvider>
        </>
    );
};

export default Contact;