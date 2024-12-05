const express = require("express");
const Task = require("../models/Task");
const { body, validationResult } = require("express-validator");
const fetchUser = require("../middleware/fetchUser");

const router = express.Router();

//=======================================fetch all task without id  1.GET:/api/task/getAllTask ===========================================
router.get("/getAllTask", async (req, res) => {
  try {
    //fetch all notes from db
    const task = await Task.find();
    res.send(task);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("some internal server error accrued To Show Task");
  }
});

//============================== fetch all task from db by id  2.GET:/api/task/getAllTaskid ============================================
router.get("/getAllTaskid", fetchUser, async (req, res) => {
  try {
    //fetch all notes from db
    const task = await Task.find({ user: req.user.id });
    res.send(task);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("some internal server error accrued To Show Your Task");
  }
});

//========================================= Create new task using  3.POST:/api/task/createtask ============================================
router.post(
  "/createtask",
  fetchUser,
  [
    body("priority")
      .isLength({ min: 3 })
      .withMessage("Priority should be minimum 3 characters required!"),
    body("title")
      .isLength({ min: 3 })
      .withMessage("Title should be minimum 3 characters required!"),
    body("description")
      .isLength({ min: 5 })
      .withMessage("Description must be use minimum 5 characters required!"),
    body("status")
      .isLength({ min: 3 })
      .withMessage("Status should be minimum 3 characters required!"),
  ],
  async (req, res) => {
    // if accured validation errors , send bad request
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty())
      return res.status(400).json({ errors: validationErrors.array() });

    try {
      const { priority, title, description, status } = req.body;

      //create new task
      const task = new Task({
        priority,
        title,
        description,
        status,
        user: req.user.id,
      });

      const newTask = await task.save();
      res.send(newTask);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("some internal server error accrued for create a new task");
    }
  }
);

//============================ update existing task using  4.PUT:/api/task/update required loging ========================================
router.put(
  "/update/:id",
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
  async (req, res) => {

    const { priority, title, description, status, Auser } = req.body;

    try {
    
      //create new empty task
      const newTask = {};

      // update detailes if data accured
      if (priority) {
        newTask.priority = priority;
      }

      if (title) {
        newTask.title = title;
      }

      if (description) {
        newTask.description = description;
      }

      if (status) {
        newTask.status = status;
      }

      if(Auser){
        newTask.Auser = Auser;
      }

      //finde task with particular id(":id")
      let task = await Task.findById(req.params.id);
      if (!task) {
        return res.status(404).send("This task are not available available");
      }

      //check task user and reqest user same or not
      if (task.user.toString() !== req.user.id) {
        return res.status(400).send("Somthing went wrong plese try with right credentials");
      }

      //find task from db and update in db
      task = await Task.findByIdAndUpdate(
        req.params.id,
        { $set: newTask },
        { new: true }
      );

      res.send(task);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("some internal server error accrued for update task");
    }
  }
);



//================================ delete existing task using  5. DELETE:/api/task/delete  login required =================================
router.delete("/delete/:id", fetchUser, async (req, res) => {
  try {
    //find task from db by user id
    let task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).send("Not found");
    }

    if (req.user.id !== task.user.toString()) {
      return res.status(400).send("Somthing went wrong");
    }

    task = await Task.findByIdAndDelete(req.params.id);

    res.send(task);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("some internal server error accrued to delete task plese try with right credentials");
  }
});


//======================================= search task  1.GET:/api/task/searchTask ===========================================
router.get("/searchTask", async (req, res) => {
  try {
    const searchInput = req.query.input;
    console.log(searchInput)
    //fetch all notes from db
    const task = (await Task.find()).filter(task=>task.title.includes(searchInput) || task.description.includes(searchInput));
    res.send(task);
  } catch (error) {
    console.error(error.message);
    res.status(500).send(error.message);
  }
});

module.exports = router;
