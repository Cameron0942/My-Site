const express = require('express');
const cors = require("cors");
const path = require('path');
const app = express();

const postRouter = require("./routes/postRouter");

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(__dirname, 'build', 'index.html');
});


app.use("/", postRouter);

app.listen(5000, () => console.log(`Server is running on port ${5000}`));