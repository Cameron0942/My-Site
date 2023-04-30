//? REACT
import React, { useRef, useEffect } from 'react';

//? MATERIAL UI
import Box from '@mui/material/Box';

//? COMPONENTS
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

//? IMAGES
const github = require('../assets/github-icon.svg').default;
const linkedin = require('../assets/linkedin-icon.svg').default;

const copyToClipboard = () => {
    // Get the text field and value
    let copyText = document.getElementById("click-email").innerText;

    // Write text to clipboard
    navigator.clipboard.writeText(copyText);

  // Alert the copied text
  alert("Copied to clipboard: " + copyText);
};

const Body = () => {

    return(
        <>
        {/*low opacity underlay box */}
        <Box sx={{
            padding: 0,
            position: 'relative',
            minHeight: '100%',            
            
            '&::before': {
                content: "''",
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0) , #19376D 50%)',
            }
          }}>

            <Box sx={{
                width: '98vw',
                height: 'auto',
                padding: 0,
                opacity: 1,
                position: 'relative',
                zIndex: 1
                }}>
                    <aside style={{height: '88vh', left: '0.5em', color: 'white', position: 'fixed', zIndex: 10, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
                        <a href='https://github.com/Cameron0942' target='_blank' rel='noreferrer'><img src={github} alt='github link' style={{}} /></a>
                        <a href='https://www.linkedin.com/in/cameron--burns/' target='_blank' rel='noreferrer'><img src={linkedin} alt='linkedin link' style={{}} /></a>
                        <div style={{width: '1px', height: '8em', backgroundColor: 'black', marginLeft: 'auto', marginRight: 'auto'}} />
                    </aside>

                    <aside style={{height: '88vh', right: '0.5em', color: 'white', position: 'fixed', zIndex: 10, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
                        <span onClick={copyToClipboard} target='_blank' rel='noreferrer' style={{transform: 'rotate(90deg)', marginBottom: 100, textDecoration: 'none', color: 'black', cursor: 'pointer'}}><p id='click-email'>burnsc0942@gmail.com</p></span>
                        <div style={{width: '1px', height: '8em', backgroundColor: 'black', marginLeft: 'auto', marginRight: 'auto'}} />
                    </aside>
                    <Hero />
                    <Projects />
                    <Contact />
            </Box>
        </Box>
          </>
    );
}

export default Body;