//? REACT
import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-scroll';


//? MATERIAL UI
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

//? IMAGES
import babby from '../assets/babby.png'


//? Responsive
const theme = createTheme();

const NavBar = () => {
    const [isHovered, setIsHovered] = useState({
        home: false,
        skills: false,
        projects: false,
        contact: false,
        aboutMe: false
    });

    //* Responsive
    const isLg = useMediaQuery(theme.breakpoints.up('lg'));
    // const isMd = useMediaQuery(theme.breakpoints.up('md'));
    // const isSm = useMediaQuery(theme.breakpoints.up('sm'));

    const handleMouseEnter = (id) => {
        
        switch(id){
            case 'home':
                setIsHovered(previousState => ({...previousState, home: true}));
            break;

            case 'skills':
                setIsHovered(previousState => ({...previousState, skills: true}));
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

            case 'skills':
                setIsHovered(previousState => ({...previousState, skills: false}));
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
        <ThemeProvider theme={theme}>
            <div style={{backgroundColor: '#050816', opacity: 1, display: isLg ? 'flex' : 'none', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 8}}>
                <div style={{paddingLeft: 20}}>
                    {/* <a href='/' style={{}}><img src={art} alt='home_logo' style={{height: '5rem', borderRadius: '50%'}}></img></a> */}
                    <a href='/' onMouseEnter={() => {handleMouseEnter('home')}} onMouseLeave={() => {handleMouseLeave('home')}} style={{color: 'white', textDecoration: isHovered.home ? 'underline' : 'none', cursor: isHovered.home ? 'pointer' : '', fontSize: 24,}}>{`<CB />`}</a>
                </div>
                
                {/* <h1 style={{margin: 0, padding: 0, color: 'white'}} className='foreground'>Hello from foreground</h1> */}

                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: '30%'}}>
                    
                    {/* <a href='#projects' onMouseEnter={() => {handleMouseEnter('projects')}} onMouseLeave={() => {handleMouseLeave('projects')}} style={{color: 'white', textDecoration: isHovered.projects ? 'underline' : 'none', fontSize: 24}}>Projects</a> */}
                    {/* <a href='#contact' onMouseEnter={() => {handleMouseEnter('contact')}} onMouseLeave={() => {handleMouseLeave('contact')}} style={{color: 'white', textDecoration: isHovered.contact ? 'underline' : 'none', fontSize: 24}}>Contact</a> */}
                    {/* <a href='#about-me' onMouseEnter={() => {handleMouseEnter('aboutMe')}} onMouseLeave={() => {handleMouseLeave('aboutMe')}} style={{color: 'white', textDecoration: isHovered.aboutMe ? 'underline' : 'none', fontSize: 24}}>About Me</a> */}
                    <Link
                        to="skills"
                        spy={true}
                        smooth={true}
                        duration={500}
                        onMouseEnter={() => handleMouseEnter('skills')}
                        onMouseLeave={() => handleMouseLeave('skills')}
                        style={{
                            color: 'white',
                            textDecoration: isHovered.skills ? 'underline' : 'none',
                            cursor: isHovered.skills ? 'pointer' : '',
                            fontSize: 24,
                        }}>
                        Skills
                    </Link>
                    <Link
                        to="projects"
                        spy={true}
                        smooth={true}
                        duration={500}
                        onMouseEnter={() => handleMouseEnter('projects')}
                        onMouseLeave={() => handleMouseLeave('projects')}
                        style={{
                            color: 'white',
                            textDecoration: isHovered.projects ? 'underline' : 'none',
                            cursor: isHovered.projects ? 'pointer' : '',
                            fontSize: 24,
                        }}>
                        Projects
                    </Link>
                    <Link
                        to="contact"
                        spy={true}
                        smooth={true}
                        duration={500}
                        onMouseEnter={() => handleMouseEnter('contact')}
                        onMouseLeave={() => handleMouseLeave('contact')}
                        style={{
                            color: 'white',
                            textDecoration: isHovered.contact ? 'underline' : 'none',
                            cursor: isHovered.contact ? 'pointer' : '',
                            fontSize: 24,
                        }}>
                        Contact
                    </Link>
                    <Link
                        to="about-me"
                        spy={true}
                        smooth={true}
                        duration={500}
                        onMouseEnter={() => handleMouseEnter('aboutMe')}
                        onMouseLeave={() => handleMouseLeave('aboutMe')}
                        style={{
                            color: 'white',
                            textDecoration: isHovered.aboutMe ? 'underline' : 'none',
                            cursor: isHovered.aboutMe ? 'pointer' : '',
                            fontSize: 24,
                        }}>
                        About Me
                    </Link>
                </div>
            </div>
            </ThemeProvider>
        </>
        
    )
};

export default NavBar;