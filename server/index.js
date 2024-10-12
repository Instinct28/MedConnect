const express = require('express');
const authAPIRoute = require('./routes/auth');
const userAPIRoute = require('./routes/user');
const patientAPIRoute = require('./routes/patient');
const connectDatabase = require('./connection');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();
const PORT = 8000;

connectDatabase();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use('/auth', authAPIRoute);
app.use('/user', userAPIRoute);
app.use('/patient', patientAPIRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
