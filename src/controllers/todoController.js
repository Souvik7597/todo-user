import todoSchema from "../models/todoSchema.js";


export const createTodo = async (req, res) => {
    try {
        const { title } = req.body
        const todoData = await todoSchema.create({ title, userId : req.userId })

        if (todoData) {
            return res.status(201).json({
                success: true,
                message: "Todo Created",
                todoData
            })
        }
    } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message
            })
    }
}

export const getAll = async (req, res) => {
    try {
        const todoData = await todoSchema.find({  userId : req.userId })

        if (todoData) {
            return res.status(201).json({
                success: true,
                message: "Todo fetched",
                todoData
            })
        }
    } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message
            })
    }
}