//? REACT
import React, { useRef, useEffect } from 'react';

//? MATERIAL UI
import { Grid } from '@mui/material';

//? CUSTOM COMPONENTS
import ProjectCard from './ProjectCard';

const Projects = () => {
    const projects = {
        first: 'Social Media Platform',
        second: 'Blackjack Simulator',
        third: 'Task Management App'
    }

    return (
        <>
            <h1 id='projects' style={{color: '#F7F7F7', fontSize: '2.5rem', textShadow: '1px 1px black', textDecoration: 'underline', textDecorationThickness: '2px', textUnderlineOffset: '10px', textDecorationColor: '#ba2649', textAlign: 'center', marginBottom: 25}}>Featured Projects</h1>
            <Grid container spacing={2} sx={{alignItems: 'center', marginLeft: 'auto', marginRight: 'auto', marginBottom: 25}}>
                <Grid item xs={6}>
                    <div style={{paddingLeft: 350}}>
                    <ProjectCard projectTitle={Object.values(projects.first)} />
                    </div>                    
                </Grid>
                <Grid item xs={6} sx={{textAlign: 'center'}}>
                    <img src='https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png' alt='Project 1' style={{borderRadius: '4px', height: '25em'}}></img>
                </Grid>
                {/* <div style={{height: '1px', width: '100%', backgroundColor: 'red'}} /> */}
                <Grid item xs={6} sx={{textAlign: 'center'}}>
                    <img src='https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png' alt='Project 1' style={{borderRadius: '4px', height: '25em'}}></img>                    
                </Grid>
                <Grid item xs={6}>
                    <div style={{paddingRight: 350}}>
                        <ProjectCard projectTitle={Object.values(projects.second)} />
                    </div>
                </Grid>
                {/* <div style={{height: '1px', width: '100%', backgroundColor: 'red'}} /> */}
                <Grid item xs={6}>
                    <div style={{paddingLeft: 350}}>
                        <ProjectCard projectTitle={Object.values(projects.third)} />
                    </div> 
                </Grid>
                <Grid item xs={6} sx={{textAlign: 'center'}}>
                    <img src='https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png' alt='Project 1' style={{borderRadius: '4px', height: '25em'}}></img>
                </Grid>
                {/* <div style={{height: '1px', width: '100%', backgroundColor: 'red'}} />              */}
            </Grid>
        </>
    )
};

export default Projects;