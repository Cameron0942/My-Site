//? REACT
import React, { useRef, useEffect } from "react";

//? MATERIAL UI
import Chip from "@mui/material/Chip";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Tooltip from "@mui/material/Tooltip";

//? IMAGES
const github = require("../assets/github-icon.svg").default;
const newtab = require("../assets/newtab-icon.svg").default;

//? Responsive
const theme = createTheme();

const ProjectCard = (projectTitle) => {
  let title = Object.values(projectTitle);
  title = title.toString();
  title = title.replaceAll(",", "");

  const isLg = useMediaQuery(theme.breakpoints.up("lg"));
  // const isMd = useMediaQuery(theme.breakpoints.up('md'));
  // const isSm = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <>
      <ThemeProvider theme={theme}>
        <div style={{ maxWidth: "70ch" }}>
          <h1
            style={{
              color: "white",
              marginBottom: 8,
              fontSize: isLg ? "auto" : "1.5em",
            }}
          >
            {title}
          </h1>
          <p
            style={{
              color: "white",
              marginBottom: 8,
              fontSize: isLg ? "auto" : "0.75em",
              textShadow: "2px 2px black",
            }}
          >
            Feeling lucky? Try your hand at a game of Blackjack! This project
            was an exercise on the Redux.js library, as well as, an exercise in
            creating a React application with Vite instead of Create React App.
            Redux keeps track of the game state across multiple components. This
            made programming the game logic a more streamlined process. I used
            an open source playing card API and Axios to fetch the card deck. I
            also used Material UI to help keep the user interface organized.
          </p>
          <div style={{ marginBottom: 8 }}>
            {/* Old technology Chips */}
            {/* <Chip label='React' color='success' />
                <Chip label='Redux' color='success' />
                <Chip label='Material UI' color='success' /> */}

            <img
              src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
              alt="React"
            />
            <img
              src="https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white"
              alt="Material UI"
            />
            <img
              src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white"
              alt="Redux"
            />
          </div>
          <Tooltip title="GitHub Repository">
            <a
              href="https://github.com/Cameron0942/blackjack-vite"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="github-project"
                src={github}
                alt="link to github"
              ></img>
            </a>
          </Tooltip>
          <Tooltip title="Live Site">
            <a
              href="https://cameron0942.github.io/blackjack-vite/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="project-live-link"
                src={newtab}
                alt="link to live project"
              ></img>
            </a>
          </Tooltip>
        </div>
      </ThemeProvider>
    </>
  );
};

export default ProjectCard;
