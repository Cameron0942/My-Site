//? REACT
import React, { useRef, useEffect } from 'react';

//? IMAGES
import babby from '../assets/babby.png'

const NavBar = () => {

    return (
        <>
        <div style={{backgroundColor: '#050816', opacity: 1, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
                <a href='/' style={{}}><img src={babby} alt='home_logo' style={{height: '5rem'}}></img></a>
            </div>
            
            {/* <h1 style={{margin: 0, padding: 0, color: 'white'}} className='foreground'>Hello from foreground</h1> */}

            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: '30%'}}>
                <a href='/' style={{color: 'white', textDecoration: 'none', fontSize: 24}}>Home</a>
                <a href='#projects' style={{color: 'white', textDecoration: 'none', fontSize: 24}}>Projects</a>
                <a href='#contact' style={{color: 'white', textDecoration: 'none', fontSize: 24}}>Contact</a>
                <a href='#about-me' style={{color: 'white', textDecoration: 'none', fontSize: 24}}>About Me</a>
            </div>
            
        </div>
        </>
        
    )
};

export default NavBar;