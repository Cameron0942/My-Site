const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

// app.get('/', function (req, res) {
//   res.sendFile(__dirname, 'build', 'index.html');
// });

app.get('/', function (req, res) {
  console.log('GET response received');
  res.sendStatus(200)
});

app.listen(5000, () => console.log(`Server is running on port ${5000}`));