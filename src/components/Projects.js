//? REACT
import React, { useRef, useEffect } from 'react';

//? MATERIAL UI
import { Grid } from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

//? CUSTOM COMPONENTS
import ProjectCard from './ProjectCard';

//? Responsive
const theme = createTheme();

const Projects = () => {
    const isLg = useMediaQuery(theme.breakpoints.up('lg'));
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    const isSm = useMediaQuery(theme.breakpoints.up('sm'));

    const projects = {
        first: 'Social Media Platform',
        second: 'Blackjack Simulator',
        third: 'Task Management App'
    }

    return (
        <>
        <ThemeProvider theme={theme}>
                <h1 id='projects' style={{color: '#F7F7F7', fontSize: isLg ? '2.5em' : '2rem', textShadow: '1px 1px black', textDecoration: 'underline', textDecorationThickness: '2px', textUnderlineOffset: '10px', textDecorationColor: '#ba2649', textAlign: 'center', marginBottom: 25}}>
                    Featured Projects
                </h1>
                <Grid container spacing={2} sx={{maxWidth: '100vw', alignItems: 'center', marginLeft: 'auto', marginRight: 'auto', marginBottom: 25}}>
                    <Grid item xs={6}>
                        <div style={{paddingLeft: isLg ? 350 : 10}}>
                        <ProjectCard projectTitle={Object.values(projects.first)} />
                        </div>                    
                    </Grid>
                    <Grid item xs={6} sx={{textAlign: 'center'}}>
                        <img src='https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png' alt='Project 1' style={{borderRadius: '4px', maxHeight: isLg ? '25em' : '8.5em'}}></img>
                    </Grid>
                    {/* <div style={{height: '1px', width: '100%', backgroundColor: 'red'}} /> */}
                    <Grid item xs={6} sx={{textAlign: 'center'}}>
                        <img src='https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png' alt='Project 1' style={{borderRadius: '4px', maxHeight: isLg ? '25em' : '8.5em'}}></img>                    
                    </Grid>
                    <Grid item xs={6}>
                        <div style={{paddingRight: isLg ? 350 : 10}}>
                            <ProjectCard projectTitle={Object.values(projects.second)} />
                        </div>
                    </Grid>
                    {/* <div style={{height: '1px', width: '100%', backgroundColor: 'red'}} /> */}
                    <Grid item xs={6}>
                        <div style={{paddingLeft: isLg ? 350 : 10}}>
                            <ProjectCard projectTitle={Object.values(projects.third)} />
                        </div> 
                    </Grid>
                    <Grid item xs={6} sx={{textAlign: 'center'}}>
                        <img src='https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png' alt='Project 1' style={{borderRadius: '4px', maxHeight: isLg ? '25em' : '8.5em'}}></img>
                    </Grid>
                    {/* <div style={{height: '1px', width: '100%', backgroundColor: 'red'}} />              */}
                </Grid>
            </ThemeProvider>
        </>
    )
};

export default Projects;