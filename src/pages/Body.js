//? REACT
import React, { useRef, useEffect } from 'react';

//? MATERIAL UI
import Box from '@mui/material/Box';

//? COMPONENTS
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

import babby from '../assets/babby.png'

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
                background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 30%, #19376D 90%)',
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
                    <Hero />
                    <Projects />
                    <Contact />
            </Box>
        </Box>
          </>
    );
}

export default Body;