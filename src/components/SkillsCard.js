import React from 'react'

//? MATERIAL UI
import { Box } from '@mui/material';

const titleStyles = {
    fontSize: '48px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textShadow: '3px 3px 3px black'
};

const underlayStyles = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: '20px',
    maxWidth: '21vw',
    border: '1px rgba(0, 0, 0, 0.25) solid',
    marginBottom: 1,
    minWidth: '25em',
};


const SkillsCard = ({skills, title}) => {
    
  return (
        <Box sx={underlayStyles}>
            <span style={titleStyles}>{title}</span>
            <div style={{display: 'flex', flexDirection: 'row', flexWrap:'wrap', justifyContent: 'space-evenly'}}>
                {skills.map((skill) => {
                    let bundle = skill[Object.keys(skill)];
                    let icon = bundle[0];
                    let skillName = bundle[1];

                    return(
                        <div key={Math.random()} style={{display: 'flex', flexDirection: 'column', textAlign: 'center', marginBottom: 15}}>
                            <img src={icon} height={'110px'} width={'110px'} alt={skillName} />
                            <span style={{color: 'whitesmoke', maxWidth: '110px', marginTop: 10}}>{skillName}</span>
                        </div>
                    )
                })}
            </div>
        </Box>
  )
};

export default SkillsCard;