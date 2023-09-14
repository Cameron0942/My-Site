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
import renderLogo from '../assets/skills/render-logo.webp';

//* Frontend skills images
const html5svg = require('../assets/html-5.svg').default;
const reactsvg = require('../assets/skills/react.svg').default;
const css3svg = require('../assets/skills/css-3.svg').default;
const muisvg = require('../assets/skills/material-ui.svg').default;
const bootstrapsvg = require('../assets/skills/bootstrap.svg').default;
const jquerysvg = require('../assets/skills/jquery.svg').default;
const reduxsvg = require('../assets/skills/redux.svg').default;

//* Backend skills images
const nodejssvg = require('../assets/skills/node-js.svg').default;
const ubuntusvg = require('../assets/skills/ubuntu.svg').default;
const nginxsvg = require('../assets/skills/nginx.svg').default;
const mysqlsvg = require('../assets/skills/mysql.svg').default;

//* Tools images
const vscodesvg = require('../assets/skills/vscode.svg').default;
const gitsvg = require('../assets/skills/git.svg').default;
const npmsvg = require('../assets/skills/npm.svg').default;
const postmansvg = require('../assets/skills/postman.svg').default;
const figmasvg = require('../assets/skills/figma.svg').default;

//* Languages images
const golangsvg = require('../assets/skills/go.svg').default;

//? Responsive
const theme = createTheme();

const topContainerStyles = {
    display: 'flex',
    justifyContent: 'space-evenly',
};

const bottomContainerStyles = {
    display: 'flex',
    justifyContent: 'space-evenly',
    marginBottom: 420,
};

  const frontendSkills = [
    {
        react: [
            reactsvg,
            'React',
        ]
    },
    {
        HTML5: [
            html5svg,
            'HTML5',
        ] 
    },
    {
        CSS3: [
            css3svg,
            'CSS3',
        ]
    },
    {
        MaterialUI: [
            muisvg,
            'Material UI',
        ]
    },
    {
        Bootstrap: [
            bootstrapsvg,
            'Bootstrap',
        ] 
    },
    {
        jQuery: [
            jquerysvg,
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
            reduxsvg,
            'Redux.js'
        ]
    },
    // {
    //     nextjs: [
    //         nextjsIcon,
    //         'Next.js'
    //     ]
    // }
];

const backendSkills = [
    {
        nodeJS: [
            nodejssvg,
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
            ubuntusvg,
            'Ubuntu'
        ]
    },
    {
        nginx: [
            nginxsvg,
            'Nginx'
        ]
    },
    {
        mongodb: [
            mongodbIcon,
            'MongoDB'
        ]
    },
    {
        mysql: [
            mysqlsvg,
            'MySQL'
        ]
    }
];

const tools = [
    {
        vscode: [
            vscodesvg,
            'Visual Studio Code'
        ]
    },
    {
        git: [
            gitsvg,
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
            npmsvg,
            'Node Package Manager'
        ]
    },
    {
        postman: [
            postmansvg,
            'Postman'
        ]
    },
    {
        figma: [
            figmasvg,
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
        golang: [
            golangsvg,
            'GoLang'
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
        render: [
            renderLogo,
            'Render'
        ]
    },
    {
        aws: [
            awsIcon,
            'Amazon Web Services'
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
            <div style={{ textAlign: 'center', marginBottom: '5px', fontSize: '12px', color: 'white' }}>
                Icons by <a href="https://icons8.com" target="_blank" rel="noopener noreferrer" style={{ color: '#1fb141', textDecoration: 'none' }}>Icons8</a>
            </div>
            <div style={topContainerStyles}>
                <SkillsCard skills={frontendSkills} title='Frontend' />
                <SkillsCard skills={backendSkills} title='Backend' />
                <SkillsCard skills={tools} title='Tools' />            
            </div>
            <div style={bottomContainerStyles}>
                <SkillsCard skills={languages} title='Languages' />
                <SkillsCard skills={cloud} title='Cloud Hosting' />
            </div>
        </ThemeProvider>
        </>
  );
}

export default Skills