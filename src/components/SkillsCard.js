import React from 'react'

//? MATERIAL UI
import { Box } from '@mui/material';

//? IMAGES
import reactIcon from '../assets/skills/icons8-react-400.png';
import html5Icon from '../assets/skills/icons8-html5-240.png';
import css3Icon from '../assets/skills/icons8-css3-240.png';
import muiIcon from '../assets/skills/icons8-material-ui-240.png';
import bootstrapIcon from '../assets/skills/icons8-bootstrap-240.png';
import jqueryIcon from '../assets/skills/icons8-jquery-250.png';

const bottomContainerStyles = {
    display: 'flex',
    justifyContent: 'space-evenly',
};

const underlayStyles = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingTop: 2,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: '20px',
    maxWidth: '21vw',
};

const titleStyles = {
    fontSize: '48px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

const skills = [
    {
        React: reactIcon
    },
    {
        HTML5: html5Icon
    },
    {
        CSS3: css3Icon
    },
    {
        MaterialUI: muiIcon
    },
    {
        Bootstrap: bootstrapIcon
    },
    {
        jQuery: jqueryIcon
    },
];

const SkillsCard = () => {
  return (
        <Box sx={underlayStyles}>
            <span style={titleStyles}>Frontend</span>
            <div style={{display: 'flex', flexDirection: 'row', flexWrap:'wrap', justifyContent: 'space-evenly'}}>
                {skills.map((skill) => {
                    let icon = Object.values(skill);
                    let skillName = Object.keys(skill);
                    return(
                        <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
                            <img src={icon} height={'100px'} width={'100px'} alt='react icon' />
                            <span>{skillName}</span>
                        </div>
                    )
                })}
            </div>
        </Box>
  )
};

export default SkillsCard;