//? MATERIAL UI
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Tooltip from "@mui/material/Tooltip";
import Alert from "@mui/material/Alert";

//? IMAGES
const github = require("../assets/github-icon.svg").default;
const newtab = require("../assets/newtab-icon.svg").default;

export default function BasicCard({ title, media, desc, links, tech }) {
  return (
    <Card sx={{ backgroundColor: "#ecf3ff", marginBottom: 4, padding: 0.8 }}>
      <CardContent>
        <Typography
          sx={{ fontSize: 24, textAlign: "center" }}
          color="text.primary"
          fontWeight="bold"
          gutterBottom
        >
          {title}
        </Typography>
        <CardMedia
          component="img"
          alt="ChanceWave"
          height="auto"
          image={media}
          style={{ maxWidth: "100%", borderRadius: "4px", marginBottom: 5 }}
        />
        <Typography variant="body2">{desc}</Typography>
      </CardContent>
      {/* Old alert for slow server  */}
      {/* {title === "Grocery Buddy" && (
        <Alert
          severity="warning"
          sx={{ marginLeft: 1, marginRight: 1, outline: "1px black solid" }}
        >
          This project is hosted using the free-tier of Render's servers, which can
          cause delays. Please be patient as it can take anywhere from 30 to 60 seconds to load.
        </Alert>
      )} */}
      <CardActions>
        <Tooltip title="GitHub Repository">
          <a href={links[0]} target="_blank" rel="noreferrer">
            <img
              className="github-project"
              src={github}
              alt="link to github"
            ></img>
          </a>
        </Tooltip>
        <Tooltip title="Live Site">
          <a href={links[1]} target="_blank" rel="noreferrer">
            <img
              className="project-live-link"
              src={newtab}
              alt="link to live project"
            ></img>
          </a>
        </Tooltip>
      </CardActions>
      <Tooltip>
        {title === "ChanceWave" && (
          <>
            <img src={tech.react} alt="react" />
            <img src={tech.materialui} alt="material ui" />
            <img src={tech.sass} alt="sass" />
            <img src={tech.nodejs} alt="nodejs" />
            <img src={tech.express} alt="express" />
            <img src={tech.mongodb} alt="mongodb" />{" "}
          </>
        )}
        {title === "Grocery Buddy" && (
          <>
            <img src={tech.react} alt="react" />
            <img src={tech.bootstrap} alt="sass" />
            <img src={tech.materialui} alt="material ui" />
            <img src={tech.redux} alt="nodejs" />
            <img src={tech.openai} alt="express" />
          </>
        )}
        {title === "Blackjack Simulator" && (
          <>
            <img src={tech.react} alt="react" />
            <img src={tech.materialui} alt="material ui" />
            <img src={tech.redux} alt="redux" />
          </>
        )}
      </Tooltip>
    </Card>
  );
}
