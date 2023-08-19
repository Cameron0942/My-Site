//? REACT
import React, { useRef, useEffect } from 'react';

//? MATERIAL UI
import Chip from '@mui/material/Chip';
import Alert from '@mui/material/Alert';
import Tooltip from '@mui/material/Tooltip';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

//? IMAGES
const github = require('../assets/github-icon.svg').default;
const newtab = require('../assets/newtab-icon.png');

//? Responsive
const theme = createTheme();

const ProjectCardThird = (projectTitle) => {
    let title = Object.values(projectTitle);
    title = title.toString();
    title = title.replaceAll(',', '');

    const isLg = useMediaQuery(theme.breakpoints.up('lg'));
    // const isMd = useMediaQuery(theme.breakpoints.up('md'));
    // const isSm = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <>
        <ThemeProvider theme={theme}>
            <div style={{maxWidth: '70ch'}}>
                <h1 style={{color: 'white', marginBottom: 8, fontSize: isLg ? 'auto' : '1.5em'}}>{title}</h1>
                <p style={{color: 'white', marginBottom: 8, fontSize: isLg ? 'auto' : '0.75em', textShadow: '2px 2px black'}}>
                    Grocery Buddy is a mobile application that helps you keep track of your groceries. If you're anything like me you may find it 
                    loathesome when you're unsure which aisle your groceries are located. Grocery Buddy keeps track of your grocery list, and with the help of OpenAI's ChatGPT,
                    organizes your items by grocery aisle. This project was an exercise in interacting with the OpenAI API as well as web hosting with private API keys.
                    Redux.JS also was a huge help in maintaining application state across components.
                </p>
                <Alert severity="warning">This is hosted using the free-tier of Render's servers, which can cause delays. Please be patient as it may take anywhere from 30 seconds to 1 minute to load.</Alert>
                <div style={{marginBottom: 8, marginTop: 8}}>
                    <Chip label='React' color='success' />
                    <Chip label='Redux' color='success' />
                    <Chip label='OpenAI' color='success' />
                    <Chip label='Bootstrap' color='success' />
                    <Chip label='Material UI' color='success' />
                </div>
                <Tooltip title="GitHub Repository">
                    <a href='https://github.com/Cameron0942/grocery-buddy' target='_blank' rel="noreferrer"><img className='github-project' src={github} alt='link to github'></img></a>
                </Tooltip>
                <Tooltip title="Live Site">
                    <a href='https://grocery-buddy-hz65.onrender.com/grocery-buddy/' target='_blank' rel="noreferrer"><img className='project-live-link' src={newtab} alt='link to live project'></img></a>
                </Tooltip>
            </div>
        </ThemeProvider>
        </>
    )
};

export default ProjectCardThird;