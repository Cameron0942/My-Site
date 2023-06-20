//? REACT
import React from 'react';

//? MATERIAL UI
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

//? COMPONENTS
import SkillsCard from './SkillsCard';

//? IMAGES
import reactIcon from '../assets/skills/icons8-react-400.png';
import html5Icon from '../assets/skills/icons8-html5-240.png';
import css3Icon from '../assets/skills/icons8-css3-240.png';
import muiIcon from '../assets/skills/icons8-material-ui-240.png';
import bootstrapIcon from '../assets/skills/icons8-bootstrap-240.png';
import jqueryIcon from '../assets/skills/icons8-jquery-250.png';
import threeJSIcon from '../assets/skills/three-js-icon.png';
import nodeJSIcon from '../assets/skills/icons8-node-js-240.png';
import expressJSIcon from '../assets/skills/icons8-express-js-256.png';
import reduxIcon from '../assets/skills/icons8-redux-240.png';
import vscodeIcon from '../assets/skills/Visual_Studio_Code_1.35_icon.png';
import githubIcon from '../assets/skills/icons8-github-250.png';
import gitIcon from '../assets/skills/icons8-git-480.png';
import postmanIcon from '../assets/skills/postman-icon-497x512-beb7sy75.png';
import pythonIcon from '../assets/skills/icons8-python-480.png';
import ubuntuIcon from '../assets/skills/icons8-ubuntu-96.png';
import mongodbIcon from '../assets/skills/icons8-mongodb-480.png';
import digitaloceanIcon from '../assets/skills/DigitalOcean_icon.png';
import awsIcon from '../assets/skills/icons8-amazon-web-services-480.png';
import nextjsIcon from '../assets/skills/nextjs-icon-512x512-11yvtwzn.png';
import nginxIcon from '../assets/skills/icons8-nginx-480.png';
import npmIcon from '../assets/skills/icons8-npm-480.png';
import figmaIcon from '../assets/skills/icons8-figma-480.png';
import jsIcon from '../assets/skills/icons8-javascript-480.png';
import cppIcon from '../assets/skills/icons8-c-480.png';

//? Responsive
const theme = createTheme();

const topContainerStyles = {
    display: 'flex',
    justifyContent: 'space-evenly',
};

const bottomContainerStyles = {
    display: 'flex',
    justifyContent: 'space-evenly',
    marginBottom: 120,
};

  const frontendSkills = [
    {
        react: [
            reactIcon,
            'React',
        ]
    },
    {
        HTML5: [
            html5Icon,
            'HTML5',
        ] 
    },
    {
        CSS3: [
            css3Icon,
            'CSS3',
        ]
    },
    {
        MaterialUI: [
            muiIcon,
            'Material UI',
        ]
    },
    {
        Bootstrap: [
            bootstrapIcon,
            'Bootstrap',
        ] 
    },
    {
        jQuery: [
            jqueryIcon,
            'jQuery',
        ]
    },
    {
        threejs: [
            threeJSIcon,
            'Three.js',
        ]
    },
    {
        redux: [
            reduxIcon,
            'Redux.js'
        ]
    },
    {
        nextjs: [
            nextjsIcon,
            'Next.js'
        ]
    }
];

const backendSkills = [
    {
        nodeJS: [
            nodeJSIcon,
            'Node.js'
        ]
    },
    {
        expressJS: [
            expressJSIcon,
            'Express.js'
        ]
    },
    {
        ubuntu: [
            ubuntuIcon,
            'Ubuntu'
        ]
    },
    {
        nginx: [
            nginxIcon,
            'Nginx'
        ]
    },
    {
        mongodb: [
            mongodbIcon,
            'MongoDB'
        ]
    }
];

const tools = [
    {
        vscode: [
            vscodeIcon,
            'Visual Studio Code'
        ]
    },
    {
        git: [
            gitIcon,
            'Git'
        ]
    },
    {
        github: [
            githubIcon,
            'Github'
        ]
    },
    {
        npm: [
            npmIcon,
            'Node Package Manager'
        ]
    },
    {
        postman: [
            postmanIcon,
            'Postman'
        ]
    },
    {
        figma: [
            figmaIcon,
            'Figma'
        ]
    }
];

const languages = [
    {
        javascript: [
            jsIcon,
            'JavaScript'
        ]
    },
    {
        python: [
            pythonIcon,
            'Python'
        ]
    },
    {
        cpp: [
            cppIcon,
            'C++'
        ]
    }
];

const cloud = [
    {
        digitalocean: [
            digitaloceanIcon,
            'Digital Ocean'
        ]
    },
    {
        aws: [
            awsIcon,
            'AWS'
        ]
    }
]


const Skills = () => {
    const isLg = useMediaQuery(theme.breakpoints.up('lg'));

    return (
        <>
        <ThemeProvider theme={theme}>
            <h1 id='skills' style={{color: '#F7F7F7', fontSize: isLg ? '2.5em' : '2rem', textShadow: '2px 2px black', textDecoration: 'underline', textDecorationThickness: '2px', textUnderlineOffset: '10px', textDecorationColor: '#ba2649', textAlign: 'center', marginBottom: 25}}>
                My Skills
            </h1>
            <div style={topContainerStyles}>
                <SkillsCard skills={frontendSkills} title='Frontend' />
                <SkillsCard skills={backendSkills} title='Backend' />
                <SkillsCard skills={tools} title='Tools' />            
            </div>
            <div style={bottomContainerStyles}>
                <SkillsCard skills={languages} title='Languages' />
                <SkillsCard skills={cloud} title='Cloud' />
            </div>
        </ThemeProvider>
        </>
  );
}

export default Skills