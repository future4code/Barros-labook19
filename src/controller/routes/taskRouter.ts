import express from "express"
import { TaskBusiness } from "../../business/TaskBusiness"
import { TaskDatabase } from "../../data/mySQL/TaskDatabase"
import { TaskController } from "../TaskController"

export const taskRouter = express.Router()



const taskDatabase = new TaskDatabase()

const taskBusiness = new TaskBusiness(taskDatabase)
const taskController = new TaskController(taskBusiness)


taskRouter.get("/:id", (req, res) => taskController.searchPost(req, res))

taskRouter.post("/create", (req, res) => taskController.createTask(req, res))