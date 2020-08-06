const Todo = require('./todo')

module.exports = {
    async index(req,res) {
        const todo = await Todo.find({})

        return res.json(todo)
    },

    async show(req,res) {
        const todo = await Todo.findById(req.params.id);

        return res.json(todo)
    },

    async store (req, res) {
        const todo = await Todo.create(req.body)

        return res.json(todo)
    },

    async update(req, res) {
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {new: true})

        return res.json(todo)
    },

    async destroy(req, res) {
        await Todo.findByIdAndRemove(req.params.id)

        return res.send();
    }
}