//? REACT
import React from 'react';

//? MATERIAL UI
import { Box } from '@mui/material';

//? COMPONENTS
import SkillsCard from './SkillsCard';

const topContainerStyles = {
    display: 'flex',
    justifyContent: 'space-evenly',
};

const bottomContainerStyles = {
    display: 'flex',
    justifyContent: 'space-evenly',
};

const underlayStyles = {
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: '20px',
    height: '100%',
};

const titleStyles = {
    fontSize: '48px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

const Skills = () => {
  return (
    <>
        <div style={topContainerStyles}>
            <SkillsCard />
            <h2>Backend</h2>
            <h2>Tools</h2>
        </div>
        <div style={bottomContainerStyles}>
            <h2>Databases</h2>
            <h2>Cloud</h2>
        </div>

    </>
  );
}

export default Skills