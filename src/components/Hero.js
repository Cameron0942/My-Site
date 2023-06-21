//? REACT
import React, { useRef, useEffect } from 'react';

//? MATERIAL UI
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

//? CUSTOM COMPONENTS
import HeroCube from './HeroCube';

//? Responsive
const theme = createTheme();

const Hero = () => {
    const isLg = useMediaQuery(theme.breakpoints.up('lg'));
    // const isMd = useMediaQuery(theme.breakpoints.up('md'));
    // const isSm = useMediaQuery(theme.breakpoints.up('sm'));

    return(
        <>
        <ThemeProvider theme={theme}>
                <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: isLg ? 'row' : 'column', alignItems: 'center', paddingTop: 150, paddingLeft: isLg ? '14%' : '2%', paddingRight: isLg ? '0%' : '2%', marginBottom: 400}}>
                    <div style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', paddingTop: 10, paddingBottom: 10, paddingLeft: 15, paddingRight: 15, borderRadius: '20px'}}>
                        <p className='hello-world' style={{color: '#9d9ea8', opacity: 0.8, fontSize: '1.5em', textShadow: '1px 1px black'}}>Hello, World!</p>
                        <h1 style={{color: 'white', textShadow: '3px 3px black', fontSize: '2.5em', margin: 0}}>I'm Cameron Burns</h1>
                        <h2 style={{color: '#9d9ea8', textShadow: '3px 3px black', fontSize: '2em', margin: 0}}>I build things for the client and server-side of the Web.</h2>
                        <p style={{color: "#ededf1", maxWidth: '100ch', fontSize: '1.5em', textShadow: '3px 3px black'}}>
                            I'm a Fullstack developer committed to creating functional and useful Web Applications. <b>Check out some of my latest projects!</b>
                        </p>
                        <p style={{color: "#ededf1", maxWidth: '100ch', fontSize: '1.5em', textShadow: '3px 3px black'}}>
                            {/* [this website is a work in progress] */}
                        </p>
                    </div>
                    
                    
                    <HeroCube />
                </div>
            </ThemeProvider>
        </>
    )
}

export default Hero;