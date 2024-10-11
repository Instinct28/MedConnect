const {Router} = require('express');
const {addPatient, updatePatient, deletePatient} = require('../controllers/patient');
const islogin = require('../middlewares/auth');

const route = Router();

route.post('/addPatient', islogin, addPatient);
route.put('/updatePatient', islogin, updatePatient);
route.delete('/deletePatient', islogin, deletePatient);

module.exports = route;