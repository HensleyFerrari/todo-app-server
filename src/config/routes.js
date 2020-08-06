const express = require('express')

const routes = express.Router()

const TodoService = require('../api/todo/todoService')

routes.get('/todos', TodoService.index)
routes.get('/todos/:id', TodoService.show)
routes.post('/todos', TodoService.store)
routes.put('/todos/:id', TodoService.update)
routes.delete('/todos/:id', TodoService.destroy)

module.exports = routes;