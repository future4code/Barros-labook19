import express from "express";
import { UserBusiness } from "../../business/UserBusiness";
import { UserDatabase } from "../../data/UserDatabase";
import { generateId } from "../../services/idGenerator";

import { UserController } from "../UserController";

export const userRouter = express.Router()

const userDatabase = new UserDatabase()

const userBusiness = new UserBusiness(userDatabase)
const userController = new UserController(userBusiness)

userRouter.get("/getAll",(req, res) => userController.getUsers(req, res))

userRouter.post('/create',(req, res) => userController.createUser(req, res))

