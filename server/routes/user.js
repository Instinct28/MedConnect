const {Router} = require('express');
const {getUser} = require('../controllers/user');
const islogin = require('../middlewares/auth');

const route = Router();

route.get('/getUser', islogin, getUser);

module.exports = route;