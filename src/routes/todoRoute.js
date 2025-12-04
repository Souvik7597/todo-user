import express from "express"
import { createTodo, getAll } from "../controllers/todoController.js"
import { hasToken } from "../middleware/hasToken.js"

const todoRoute = express.Router()

todoRoute.post("/create", hasToken, createTodo)
todoRoute.get("/getAll", getAll)


export default todoRoute