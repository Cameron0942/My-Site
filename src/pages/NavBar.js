//? REACT
import React, { useRef, useEffect, useState } from 'react';

//? IMAGES
import babby from '../assets/babby.png'

const NavBar = () => {
    const [isHovered, setIsHovered] = useState({
        home: false,
        projects: false,
        contact: false,
        aboutMe: false
    });

    const handleMouseEnter = (id) => {
        
        switch(id){
            case 'home':
                setIsHovered(previousState => ({...previousState, home: true}));
            break;

            case 'projects':
                setIsHovered(previousState => ({...previousState, projects: true}));
            break;

            case 'contact':
                setIsHovered(previousState => ({...previousState, contact: true}));
            break;

            case 'aboutMe':
                setIsHovered(previousState => ({...previousState, aboutMe: true}));
            break;

            default:
                break;
        }
    };

    const handleMouseLeave = (id) => {
        
        switch(id){
            case 'home':
                setIsHovered(previousState => ({...previousState, home: false}));
            break;

            case 'projects':
                setIsHovered(previousState => ({...previousState, projects: false}));
            break;

            case 'contact':
                setIsHovered(previousState => ({...previousState, contact: false}));
            break;

            case 'aboutMe':
                setIsHovered(previousState => ({...previousState, aboutMe: false}));
            break;

            default:
                break;
        }
    };

    return (
        <>
            <div style={{backgroundColor: '#050816', opacity: 1, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 8}}>
                <div style={{paddingLeft: 20}}>
                    {/* <a href='/' style={{}}><img src={art} alt='home_logo' style={{height: '5rem', borderRadius: '50%'}}></img></a> */}
                    <a href='/' onMouseEnter={() => {handleMouseEnter('home')}} onMouseLeave={() => {handleMouseLeave('home')}} style={{color: 'white', textDecoration: isHovered.home ? 'underline' : 'none', fontSize: 24,}}>Home</a>
                </div>
                
                {/* <h1 style={{margin: 0, padding: 0, color: 'white'}} className='foreground'>Hello from foreground</h1> */}

                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: '30%'}}>
                    
                    <a href='#projects' onMouseEnter={() => {handleMouseEnter('projects')}} onMouseLeave={() => {handleMouseLeave('projects')}} style={{color: 'white', textDecoration: isHovered.projects ? 'underline' : 'none', fontSize: 24}}>Projects</a>
                    <a href='#contact' onMouseEnter={() => {handleMouseEnter('contact')}} onMouseLeave={() => {handleMouseLeave('contact')}} style={{color: 'white', textDecoration: isHovered.contact ? 'underline' : 'none', fontSize: 24}}>Contact</a>
                    <a href='#about-me' onMouseEnter={() => {handleMouseEnter('aboutMe')}} onMouseLeave={() => {handleMouseLeave('aboutMe')}} style={{color: 'white', textDecoration: isHovered.aboutMe ? 'underline' : 'none', fontSize: 24}}>About Me</a>
                </div>
                
            </div>
        </>
        
    )
};

export default NavBar;