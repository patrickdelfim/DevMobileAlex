const express = require("express");
const scoreRouter = require("./router/score");
var cors = require('cors');


const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(scoreRouter);


app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});