//? REACT
import React, { useRef, useEffect } from 'react';

import HeroCube from './HeroCube';

const Hero = () => {

    return(
        <>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 150, paddingLeft: '14%', marginBottom: 400}}>
                <div>
                    <p className='hello-world' style={{color: '#9d9ea8', opacity: 0.8, fontSize: '1.5em', textShadow: '1px 1px black'}}>Hello, World!</p>
                    <h1 style={{color: 'white', textShadow: '3px 3px black', fontSize: '2.5em', margin: 0}}>I'm Cameron Burns</h1>
                    <h2 style={{color: '#9d9ea8', textShadow: '3px 3px black', fontSize: '2em', margin: 0}}>I build things for the client and server-side of the Web.</h2>
                    <p style={{color: "#ededf1", maxWidth: '100ch', fontSize: '1.5em', textShadow: '3px 3px black'}}>
                        I'm a Fullstack developer committed to creating functional and useful Web Applications. <b>I'm currently looking for new opportunities!</b>
                    </p>
                </div>
                
                
                <HeroCube />
            </div>
        </>
    )
}

export default Hero;