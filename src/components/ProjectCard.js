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
            ChanceWave is your go-to web app for making decisions effortlessly.
            With ChanceWave, individuals or groups can easily create lists of
            options. Whether you're planning a night out with friends or simply
            need help making choices, ChanceWave simplifies the process and adds
            an element of surprise to your decision-making. This app uses an
            advanced random number generation algorithm to ensure fair
            selections. Say goodbye to indecision and hello to ChanceWave!
          </p>
          <div style={{ marginBottom: 8 }}>
            {/* Old technology Chips */}
            {/* <Chip
              label="React"
              style={{ color: "white", backgroundColor: "green" }}
            />
            <Chip label="Express" color="success" />
            <Chip label="Node" color="success" />
            <Chip label="MongoDB" color="success" /> */}

            <img
              src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
              alt="React"
            />
            <img
              src="https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white"
              alt="Material UI"
            />
            <img
              src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"
              alt="SASS"
            />
            <img
              src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"
              alt="NodeJS"
            />
            <img
              src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"
              alt="ExpressJS"
            />
            <img
              src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"
              alt="MongoDB"
            />
          </div>
          <Tooltip title="GitHub Repository">
            <a href="https://github.com/Cameron0942/decision-maker">
              <img className="github-project" src={github}></img>
            </a>
          </Tooltip>
          <Tooltip title="Live Site">
            <a
              href="https://brilliant-lokum-f95939.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="project-live-link" src={newtab}></img>
            </a>
          </Tooltip>
        </div>
      </ThemeProvider>
    </>
  );
};

export default ProjectCard;
