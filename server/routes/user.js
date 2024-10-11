const {Router} = require('express');
const {getUser, updateUser, deleteUser} = require('../controllers/user');
const islogin = require('../middlewares/auth');

const route = Router();

route.get('/getUser', islogin, getUser);
route.put('/updateUser', islogin, updateUser);
route.delete('/deleteUser', islogin, deleteUser);

module.exports = route;