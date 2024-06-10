const express = require('express')
const router = express.Router()
const todoModel = require('../Models/todoModel')
const userModel = require('../Models/userModel')
const  authenticateToken  = require('./Auth')

router.use(express.json())


//Add Task
router.post('/add', authenticateToken, async (req, res) => {
  try {
    const task = req.body.task;
    const date = req.body.date;
    const { id } = req.headers;
    const newTask = new todoModel({ task: task, date: date });
    const saveTask = await newTask.save();
    const taskId = saveTask._id;
    await userModel.findByIdAndUpdate(id, { $push: { tasks: taskId._id } });
    res.status(200).json({ message: "Task created" })
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: "Internal server error" })
  }
})

//Get Task
router.get('/get', authenticateToken, async (req, res) => {
  try {
    const { id } = req.headers;
    const userData = await userModel.findById(id).populate({
      path: "tasks",
      options: { sort: { createdAt: -1 } },
    })
    res.status(200).json({ data: userData });
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: "Internal server error" });
  }
})

router.put('/update/:id', (req, res) => {
  const { id } = req.params;
  todoModel.findByIdAndUpdate({ _id: id }, { done: true })
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

//Delete Task
router.delete('/delete/:id',authenticateToken, async(req, res) => {try {
    const { id } = req.params;
    const userId = req.headers.id;
    await todoModel.findByIdAndDelete(id);
    await userModel.findByIdAndUpdate(userId, { $pull: { tasks: id } });
    res.status(200).json({message : "Task deleted successfully"})
} catch (error) {
  console.log(error)
  res.status(400).json({message : "Internal server error"})
}
})

//Update Finish task

router.put('/finish/:id',authenticateToken, async(req, res) => {
    try {
      const { id } = req.params
      await todoModel.findByIdAndUpdate(id, { done: true })
      res.status(200).json({message:"Task Finished"})
    } catch (error) {
      console.log(error)
      res.status(400).json({message : error})
    }
})

//Get Finished task
router.get('/getFinish', authenticateToken, async (req, res) => {
  try {
    const { id } = req.headers
    const userData = await userModel.findById(id).populate({
      path: "tasks",
      match: {done : true}
    })
    res.status(200).json({data : userData})
  } catch(error) {
    res.status(400).json({message : "Internal server Error"})
  }})

module.exports = router