const Todos = require('../models/todoModel');
const bodyParser = require('body-parser');

module.exports = (app) => {
    app.use(bodyParser.json());

    app.get('/todo/')
}