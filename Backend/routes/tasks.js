const express = require("express");
const Task = require("../models/Task");
const { body, validationResult } = require("express-validator");
const fetchUser = require("../middleware/fetchUser");

const router = express.Router();

// Create new task using POST:/api/task/createtask =================================================================
router.post(
  "/createtask",
  fetchUser,
  [
    body("priority")
      .isLength({ min: 3 })
      .withMessage("Minimum 3 characters required!"),
    body("title")
      .isLength({ min: 5 })
      .withMessage("Minimum 5 characters required!"),
    body("description")
      .isLength({ min: 5 })
      .withMessage("Minimum 5 characters required!"),
    body("status")
      .isLength({ min: 3 })
      .withMessage("Minimum 3 characters required!"),
  ],
  async(req, res) => {

    // if accured validation errors , send bad request
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty())
      return res.status(400).json({ errors: validationErrors.array() });

    try {
      const { priority, title, description, status,} = req.body;

      //create new task
      const task =  new Task({
        priority,
        title,
        description,
        status,
        user:req.user.id
      });
      res.send(task);

    } catch (error) {
      console.error(error.message);
      res.status(500).send("some internal server error accrued");
    }
  }
);


// update new task using PUT:/api/task/update =================================================================
router.put('/update', fetchUser, [], (req,res)=>{
    
})

module.exports = router;
