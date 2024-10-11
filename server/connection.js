const mongoose = require('mongoose');

const connectDatabase = () =>{
    return mongoose.connect('mongodb://localhost:27017/MedConnect').then(()=>{
        console.log("Database connected");
    }).catch(()=>{
        console.log("Error in database connection");
    });
}

module.exports = connectDatabase;