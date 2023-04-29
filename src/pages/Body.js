//? REACT
import React, { useRef, useEffect } from 'react';

//? MATERIAL UI
import Box from '@mui/material/Box';

//? COMPONENTS
import Hero from '../components/Hero';

import babby from '../assets/babby.png'

const Body = () => {

    return(
        <>
        {/*low opacity underlay box */}
        <Box sx={{
            width: '98vw',
            height: '90vh',
            padding: 0,
            marginLeft: '1%',
            marginRight: '2%',
            backgroundColor: 'primary.dark',
            opacity: 0.1,
            position: 'fixed',
            zIndex: -1
          }} />
            
        <Box sx={{
            width: '98vw',
            height: '90vh',
            padding: 0,
            marginLeft: '1%',
            marginRight: '1%',
            opacity: 1,
            position: 'fixed',
            zIndex: 1
          }} >
            {/* <span style={{color: 'white', position: 'relative', zIndex: 1}}>Hello</span>
            <img src={babby} style={{height: '200px'}}></img> */}
            <Hero />
          </Box>
          

          
          
          
          </>
    );
}

export default Body;