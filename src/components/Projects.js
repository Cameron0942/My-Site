//? REACT
import React, { useRef, useEffect } from 'react';

//? MATERIAL UI
import { Grid } from '@mui/material';

//? CUSTOM COMPONENTS
import ProjectCard from './ProjectCard';

const Projects = () => {

    return (
        <>
            <Grid container spacing={2} sx={{alignItems: 'center'}}>
                <Grid item xs={6}>
                    <ProjectCard />
                </Grid>
                <Grid item xs={6} sx={{textAlign: 'center'}}>
                    <img src='https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png' alt='Project 1' style={{borderRadius: '4px', height: '100%'}}></img>
                    
                </Grid>
                {/* <div style={{height: '1px', width: '100%', backgroundColor: 'red'}} /> */}
                <Grid item xs={6}>
                    <ProjectCard />
                </Grid>
                <Grid item xs={6} sx={{textAlign: 'center'}}>
                    <img src='https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png' alt='Project 1' style={{borderRadius: '4px', height: '100%'}}></img>
                    
                </Grid>
                {/* <div style={{height: '1px', width: '100%', backgroundColor: 'red'}} /> */}
                <Grid item xs={6}>
                    <ProjectCard />
                </Grid>
                <Grid item xs={6} sx={{textAlign: 'center'}}>
                    <img src='https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png' alt='Project 1' style={{borderRadius: '4px', height: '100%'}}></img>
                </Grid>
                {/* <div style={{height: '1px', width: '100%', backgroundColor: 'red'}} />              */}
            </Grid>
        </>
    )
};

export default Projects;