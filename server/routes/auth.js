const {Router} = require('express');
const { signup, login } = require('../controllers/auth');

const route = Router();

route.post('/signup', signup);
route.post('/login', login);

module.exports = route;