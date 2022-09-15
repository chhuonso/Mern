// IMPORT THE CONTROLLER
const Author = require("../controllers/author.controller")

module.exports = (app) => {
    app.get('/api/authors', Author.findAll);
    app.post('/api/authors', Author.create);
    app.get('/api/authors/:id', Author.findOne);
    app.put('/api/authors/:id', Author.update);
    app.delete('/api/authors/:id', Author.delete);
}

// AFTER go back to server.js and connect the ROUTES