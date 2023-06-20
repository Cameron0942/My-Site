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
            'mailto:cburnsdev@gmail.com',
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
    // const isMd = useMediaQuery(theme.breakpoints.up('md'));
    // const isSm = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <>
        <ThemeProvider theme={theme}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{width: '100vw'}}>
                <defs>
                    <linearGradient id="gradient" gradientTransform="rotate(90)">
                        <stop offset="0%" stop-color="#19376D" />
                        <stop offset="100%" stop-color="#2f6ede" />
                    </linearGradient>
                </defs>
                <path fill="url(#gradient)" fill-opacity="1" d="M0,160L40,138.7C80,117,160,75,240,80C320,85,400,139,480,144C560,149,640,107,720,90.7C800,75,880,85,960,117.3C1040,149,1120,203,1200,213.3C1280,224,1360,192,1400,176L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
            </svg>

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