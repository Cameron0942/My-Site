//? REACT
import React, { useRef, useEffect } from "react";

//? MATERIAL UI
import { Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

//? CUSTOM COMPONENTS
import ProjectCard from "./ProjectCard";
import ProjectCardSecond from "./ProjectCardSecond";
import ProjectCardThird from "./ProjectCardThird";
import ProjectCardResponsive from "./ProjectsCardResponsive";

//? IMAGES
import bugTrackerImage from "../assets/bug-tracker-ss.png";
import chanceWaveImage from "../assets/ChanceWaveSS.png";
import blackjackImage from "../assets/blackjack-screenshot.png";
import groceryBuddyImage from "../assets/grocery-buddy-img.png";

//? Responsive
const theme = createTheme();

const Projects = () => {
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));
  // const isMd = useMediaQuery(theme.breakpoints.up('md'));
  // const isSm = useMediaQuery(theme.breakpoints.up('sm'));

  const projects = {
    first: "ChanceWave",
    second: "Blackjack Simulator",
    third: "Grocery Buddy",
  };

  const projectDescriptions = {
    desc1:
      "ChanceWave is your go-to web app for making decisions effortlessly. With ChanceWave, individuals or groups can easily create lists of options. Whether you're planning a night out with friends or simply need help making choices, ChanceWave simplifies the process and adds an element of surprise to your decision-making. This app uses an advanced random number generation algorithm to ensure fair selections. Say goodbye to indecision and hello to ChanceWave!",

    desc2:
      "Feeling lucky? Try your hand at a game of Blackjack! This project was an exercise on the Redux.js library, as well as, an exercise in creating a React application with Vite instead of Create React App. Redux keeps track of the game state across multiple components. This made programming the game logic a more streamlined process. I used an open source playing card API and Axios to fetch the card deck. I also used Material UI for buttons, and to help keep the components organized.",

    desc3: `Grocery Buddy is a mobile application that helps you keep track of your groceries. If you're anything like me you may find it loathesome when you're not sure which aisle your groceries are located. Grocery Buddy keeps track of your grocery list, and with the help of OpenAI's ChatGPT, organizes your items by grocery aisle. This project was an exercise in interacting with the OpenAI API as well as web hosting with private API keys. Redux.JS also was a huge help in maintaining application state across components.`,
  };

  const projectLinks = {
    bugTracker: [
      "https://github.com/Cameron0942/decision-maker",
      "https://brilliant-lokum-f95939.netlify.app/",
    ],
    blackjack: [
      "https://github.com/Cameron0942/blackjack-vite",
      "https://cameron0942.github.io/blackjack-vite/",
    ],
    groceryBuddy: [
      "https://github.com/Cameron0942/grocery-buddy",
      "https://grocery-buddy-hz65.onrender.com/grocery-buddy/",
    ],
  };

  const tech = {
    react: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
    redux: "https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white",
    materialui: "https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white",
    sass: "https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white",
    bootstrap: "https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white",
    nodejs: "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white",
    express: "https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white",
    mongodb: "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white",
    openai: "https://img.shields.io/badge/OpenAI-168363?style=for-the-badge&logo=openai&logoColor=white",
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <h1
          id="projects"
          style={{
            color: "#F7F7F7",
            fontSize: isLg ? "2.5em" : "2rem",
            textShadow: "1px 1px black",
            textDecoration: "underline",
            textDecorationThickness: "2px",
            textUnderlineOffset: "10px",
            textDecorationColor: "#ba2649",
            textAlign: "center",
            marginBottom: 25,
          }}
        >
          Projects
        </h1>

        {!isLg && (
          <div style={{ padding: "3%" }}>
            <ProjectCardResponsive
              title="ChanceWave"
              media={chanceWaveImage}
              desc={projectDescriptions.desc1}
              links={projectLinks.bugTracker}
              tech={tech}
            />

            <ProjectCardResponsive
              title="Grocery Buddy"
              media={groceryBuddyImage}
              desc={projectDescriptions.desc3}
              links={projectLinks.groceryBuddy}
              tech={tech}
            />

            <ProjectCardResponsive
              title="Blackjack Simulator"
              media={blackjackImage}
              desc={projectDescriptions.desc2}
              links={projectLinks.blackjack}
              tech={tech}
            />
          </div>
        )}

        {isLg && (
          <Grid
            container
            sx={{
              maxWidth: "100vw",
              alignItems: "center",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: 25,
            }}
          >
            <Grid item xs={6}>
              <div style={{ paddingLeft: isLg ? 350 : 10 }}>
                <ProjectCard projectTitle={Object.values(projects.first)} />
              </div>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: "center" }}>
              <img
                src={chanceWaveImage}
                alt="Project 1"
                style={{
                  borderRadius: "40px",
                  border: "1px solid rgba(0, 0, 0, 0.75)",
                  maxHeight: isLg ? "25em" : "100%",
                  maxWidth: isLg ? "100%" : "48vw",
                }}
              ></img>
            </Grid>
            {/* <div style={{height: '1px', width: '100%', backgroundColor: 'red'}} /> */}
            {/* End of projectcard 1 */}

            <Grid item xs={6} sx={{ textAlign: "center" }}>
              <img
                src={blackjackImage}
                alt="Project 1"
                style={{
                  borderRadius: "40px",
                  border: "1px solid rgba(0, 0, 0, 0.75)",
                  maxHeight: isLg ? "25em" : "100%",
                  maxWidth: isLg ? "100%" : "48vw",
                }}
              ></img>
            </Grid>
            <Grid item xs={6}>
              <div style={{ paddingRight: isLg ? 350 : 10 }}>
                {/* <ProjectCard projectTitle={Object.values(projects.second)} /> */}
                <ProjectCardSecond
                  projectTitle={Object.values(projects.second)}
                />
              </div>
            </Grid>
            {/* <div style={{height: '1px', width: '100%', backgroundColor: 'red'}} /> */}
            {/* End of projectcard 2 */}

            <Grid item xs={6}>
              <div style={{ paddingLeft: isLg ? 350 : 10 }}>
                {/* <ProjectCard projectTitle={Object.values(projects.third)} /> */}
                <ProjectCardThird
                  projectTitle={Object.values(projects.third)}
                />
              </div>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: "center" }}>
              <img
                src={groceryBuddyImage}
                alt="Project 1"
                style={{
                  borderRadius: "40px",
                  border: "1px solid rgba(0, 0, 0, 0.75)",
                  maxHeight: isLg ? "25em" : "100%",
                  maxWidth: isLg ? "100%" : "45vw",
                }}
              ></img>
            </Grid>
            {/* <div style={{height: '1px', width: '100%', backgroundColor: 'red'}} />              */}
            {/* End of projectcard 3 */}
          </Grid>
        )}
      </ThemeProvider>
    </>
  );
};

export default Projects;
