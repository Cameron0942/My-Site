//? REACT
import React, { useState, useEffect } from "react";

//? MATERIAL UI
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

//? Responsive
const theme = createTheme();

const AboutMe = () => {
  const [isBottom, setIsBottom] = useState(false);

  const isLg = useMediaQuery(theme.breakpoints.up("lg"));
  // const isMd = useMediaQuery(theme.breakpoints.up('md'));
  // const isSm = useMediaQuery(theme.breakpoints.up('sm'));

  useEffect(() => {
    //* Hides overlay when at bottom of the screen
    function handleScroll() {
      const scrollPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;

      if (scrollPosition + windowHeight >= documentHeight) {
        setIsBottom(true);
      } else {
        setIsBottom(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <div
          id="about-me"
          style={{
            height: isLg ? "145vh" : "185vh",
            margin: "0 0 0 0",
            textAlign: "center",
            textShadow: "1px 1px black",
            background: isBottom
              ? ""
              : "linear-gradient(to top, rgba(255, 255, 255, 0) 15%, #19376D 75%)",
          }}
        >
          <div
            style={{
              maxWidth: "75ch",
              margin: "0 auto",
              paddingTop: 60,
              paddingLeft: "5%",
              paddingRight: "5%",
            }}
          >
            <h1
              style={{
                color: "#F7F7F7",
                fontSize: isLg ? "2.5rem" : "2.0rem",
                textShadow: "1px 1px black",
                textDecoration: "underline",
                textDecorationThickness: "2px",
                textUnderlineOffset: "10px",
                textDecorationColor: "#ba2649",
              }}
            >
              About Me
            </h1>
            <p
              style={{
                color: "#F7F7F7",
                marginTop: 20,
                fontSize: isLg ? "1.3rem" : "1.1rem",
              }}
            >
              I'm a fullstack web developer based in Las Vegas, NV. I'm
              passionate about cutting-edge, pixel-perfect, responsive user
              interfaces, and dynamic user experiences.
            </p>
            <p
              style={{
                color: "#F7F7F7",
                marginTop: 20,
                fontSize: isLg ? "1.3rem" : "1.1rem",
              }}
            >
              My enthusiasm for web development began when I worked as a tutor
              mentoring children the fundamentals of programming. At that time,
              I didn't imagine that tinkering with <b>HTML</b>, <b>CSS</b> and{" "}
              <b>JavaScript</b> could get me this far, yet it turned out to be
              much more than that!
            </p>
            <p
              style={{
                color: "#F7F7F7",
                marginTop: 20,
                fontSize: isLg ? "1.3rem" : "1.1rem",
              }}
            >
              Nowadays, I don't keep hacking around with HTML, CSS and vanilla
              JavaScript anymore — my focus now is to develop things for the
              real world by using them! And of course <b>React</b>,{" "}
              <b>Node.js</b>, <b>Express.js</b>, and many other frameworks and
              libraries that I work with every day.
            </p>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};

export default AboutMe;
