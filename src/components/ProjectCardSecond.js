//? REACT
import React, { useRef, useEffect } from 'react';

//? MATERIAL UI
import { Grid } from '@mui/material';
import Chip from '@mui/material/Chip';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

//? IMAGES
const github = require('../assets/github-icon.svg').default;
const newtab = require('../assets/newtab-icon.png');

//? Responsive
const theme = createTheme();

const ProjectCard = (projectTitle) => {
    let title = Object.values(projectTitle);
    title = title.toString();
    title = title.replaceAll(',', '');

    const isLg = useMediaQuery(theme.breakpoints.up('lg'));
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    const isSm = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <>
        <ThemeProvider theme={theme}>
            <div style={{maxWidth: '70ch'}}>
                <h1 style={{color: 'white', marginBottom: 8, fontSize: isLg ? 'auto' : '1.5em'}}>{title}</h1>
                <p style={{color: 'white', marginBottom: 8, fontSize: isLg ? 'auto' : '0.75em', textShadow: '2px 2px black'}}>
                    Feeling lucky? Try your hand at a game of Blackjack! This project was an exercise on the Redux.js library, as well as, an exercise in creating a React application with Vite instead of Create React App. Redux keeps track of the game state across multiple components. This made programming the game logic a more streamlined process. I used an open source playing card API and Axios to fetch the card deck. I also used Material UI for buttons, and to help keep the components organized.
                </p>
                <div style={{marginBottom: 8}}>
                    <Chip label='React' color='success' />
                    <Chip label='Redux' color='success' />
                    <Chip label='Material UI' color='success' />
                </div>
                <a href='https://github.com/Cameron0942/blackjack-vite' target='_blank' rel="noreferrer"><img className='github-project' src={github} alt='link to github'></img></a>
                <a href='https://cameron0942.github.io/blackjack-vite/' target='_blank' rel="noreferrer"><img className='project-live-link' src={newtab} alt='link to live projct'></img></a>
            </div>
        </ThemeProvider>
        </>
    )
};

export default ProjectCard;