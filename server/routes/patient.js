const {Router} = require('express');
const {addPatient, updatePatient, deletePatient, getAllPatient, findPatientByCity} = require('../controllers/patient');
const islogin = require('../middlewares/auth');

const route = Router();

route.get('/getAllPatient', getAllPatient);
route.post('/addPatient', islogin, addPatient);
route.put('/updatePatient', islogin, updatePatient);
route.delete('/deletePatient', islogin, deletePatient);
route.get('/findPatientByCity', findPatientByCity)

module.exports = route;