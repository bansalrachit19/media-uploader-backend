const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        useUnifiedTopology:true,
        useNewUrlParser:true,
    })
    .then( () => {
        console.log("db connected succesfully");
    })
    .catch( (error) => {
        console.error(error);
        console.log("error in connecting with db");
        process.exit(1);
    });
}

module.exports = dbConnect;