const express = require('express');
const server = express()
// routers
const recipeRouter = require('./recipes/recipes-router');
server.use(express.json())

server.use('/api/recipes', recipeRouter)

server.get('/', (req, res) => {
    res.json({message: "Welcome to the API for recipes"})
})

server.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(err.status || 500).json({
        error: {},
        message: err.message,
        customMessage: 'Something went wrong, try again'
    })
})

module.exports = server;