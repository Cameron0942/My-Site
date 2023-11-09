//? REACT
import React, { useRef, useEffect } from "react";

//? MATERIAL UI
import Chip from "@mui/material/Chip";
import Alert from "@mui/material/Alert";
import Tooltip from "@mui/material/Tooltip";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

//? IMAGES
const github = require("../assets/github-icon.svg").default;
const newtab = require("../assets/newtab-icon.svg").default;

//? Responsive
const theme = createTheme();

const ProjectCardThird = (projectTitle) => {
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
            Grocery Buddy is a web application that helps you keep track of your
            groceries in an efficient way. This app keeps track of your grocery list, and with
            the help of OpenAI's ChatGPT, organizes your items by grocery aisle for you.
            Grocery Buddy can also analyze your list and suggest recipes
            that closely match the items you were going to buy anyway. Try it out!
          </p>
          {/* Old warning about slow server times */}
          {/* <Alert severity="warning">
            This project is hosted using the free-tier of Render's servers,
            which can cause delays. Please be patient as it may take anywhere
            from 30 to 60 seconds to load.
          </Alert> */}
          <div style={{ marginBottom: 8, marginTop: 8 }}>
            {/* Old technology Chips */}
            {/* <Chip label='React' color='success' />
                    <Chip label='Redux' color='success' />
                    <Chip label='OpenAI' color='success' />
                    <Chip label='Bootstrap' color='success' />
                    <Chip label='Material UI' color='success' /> */}

            <img
              src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
              alt="React"
            />
            <img
              src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"
              alt="Bootstrap"
            />
            <img
              src="https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white"
              alt="Material UI"
            />
            <img
              src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white"
              alt="Redux"
            />
            <img
              src="https://img.shields.io/badge/OpenAI-168363?style=for-the-badge&logo=openai&logoColor=white"
              alt="OpenAI"
            />
          </div>
          <Tooltip title="GitHub Repository">
            <a
              href="https://github.com/Cameron0942/grocery-buddy"
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
              href="https://grocery-buddy-beta.vercel.app/"
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

export default ProjectCardThird;
