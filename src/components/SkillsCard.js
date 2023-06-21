import React from 'react'

//? MATERIAL UI
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from '@mui/material';

//? Responsive
const theme = createTheme();

const SkillsCard = ({skills, title}) => {
    const isLg = useMediaQuery(theme.breakpoints.up('lg'));

    const titleStyles = {
        fontSize: isLg ? '48px' : '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textShadow: '3px 3px 3px black',
        marginBottom: 5,
        textDecoration: 'underline',
    };
    
    const underlayStyles = {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingTop: 2,
        paddingBottom: isLg ? 2 : 0,
        paddingLeft: isLg ? 8 : 2,
        paddingRight: isLg ? 8 : 2,
        borderRadius: '20px',
        maxWidth: '21vw',
        border: '1px rgba(0, 0, 0, 0.25) solid',
        marginBottom: isLg ? 8 : 0.1,
        minWidth: isLg ? '25em' : '1em',
    };
    
  return (
    <ThemeProvider theme={theme}>
        <Box sx={underlayStyles}>
            <span style={titleStyles}>{title}</span>
            <div style={{display: 'flex', flexDirection: 'row', flexWrap:'wrap', justifyContent: 'space-evenly'}}>
                {skills.map((skill) => {
                    let bundle = skill[Object.keys(skill)];
                    let icon = bundle[0];
                    let skillName = bundle[1];

                    return(
                        <div key={Math.random()} style={{display: 'flex', flexDirection: 'column', textAlign: 'center', alignItems: 'center', marginBottom: 15}}>
                            <img src={icon} height={ isLg ?'110px' : '50px'} width={ isLg ? '110px' : '50px'} alt={skillName} />
                            <span style={{color: 'whitesmoke', maxWidth: '110px', marginTop: 10, fontSize: isLg ? '100%' : '12px'}}>{skillName}</span>
                        </div>
                    )
                })}
            </div>
        </Box>
    </ThemeProvider>
  )
};

export default SkillsCard;