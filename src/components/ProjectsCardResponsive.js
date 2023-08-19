//? MATERIAL UI
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Tooltip from "@mui/material/Tooltip";

//? IMAGES
const github = require("../assets/github-icon.svg").default;
const newtab = require("../assets/newtab-icon.png");

export default function BasicCard({title, media, desc}) {
  return (
    <Card sx={{ backgroundColor: "#ecf3ff", marginBottom: 4 }}>
      <CardContent>
        <Typography
          sx={{ fontSize: 24, textAlign: "center" }}
          color="text.primary"
          gutterBottom
        >
          {title}
        </Typography>
        <CardMedia
          component="img"
          alt="Bug Tracker Screenshot"
          height="auto"
          image={media}
          style={{ maxWidth: "100%", borderRadius: "4px", marginBottom: 5 }}
        />
        <Typography variant="body2">
            {desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Tooltip title="GitHub Repository">
          <a href="/" target="_blank" rel="noreferrer">
            <img
              className="github-project"
              src={github}
              alt="link to github"
            ></img>
          </a>
        </Tooltip>
        <Tooltip title="Live Site">
          <a href="/" target="_blank" rel="noreferrer">
            <img
              className="project-live-link"
              src={newtab}
              alt="link to live project"
            ></img>
          </a>
        </Tooltip>
      </CardActions>
    </Card>
  );
}
