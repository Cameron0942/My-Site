//? REACT
import React, { useRef, useEffect } from 'react';

import HeroCube from './HeroCube';

import babby from '../assets/babby.png'

const Hero = () => {

    return(
        <>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 150, paddingLeft: 25}}>
                <span style={{color: "white", maxWidth: '100ch', fontSize: 24, textShadow: '3px 3px black'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </span>
                
                <HeroCube />
            </div>
        </>
    )
}

export default Hero;