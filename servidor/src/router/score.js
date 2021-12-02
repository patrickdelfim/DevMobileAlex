const express = require("express");
const db = require("../DAO/scoreDAO")
const database = new db()
const router = express.Router();


router.post("/tasks", async (req, res) => {
  const task = new Task({ ...req.body, owner: req.user._id });

  try {
    await task.save();
    res.status(201).send(task);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/scores", async (req, res) => {
  console.log("New Get Request...")
  try {
    const databaseResponse = await database.getScoreFromDatabase()

    res.send(databaseResponse);
  } catch (error) {
    res.status(400).send();
  }
});

router.post("/scores", async (req, res) => {

    const newScore = { ...req.body };
    console.log("New Post Request ",newScore)
    try {
      const databaseResponse = await database.addScoreToDatabase(newScore)
  

      if(databaseResponse.affectedRows>0){
        res.status(200).send();
    }else{
        throw new Error
    }
    } catch (error) {
      res.status(400).send();
    }
  });

module.exports = router;