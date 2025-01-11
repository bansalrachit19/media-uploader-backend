//importing the required modules
const express = require("express");
require("dotenv").config();

const PORT = process.env.config || 4000;
const app = express();

app.use(express.json());

//file upload karne ke liye middleware
//it will upload the files on the server and the cloudinary will upload the files on the cloud and delete them from server
const fileUpload = require("express-fileupload");
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

//importing the cloudinary and database connection files
const connect = require("../fileUpload/config/dbConnect");
connect();
const cloudinaryConnect = require("../fileUpload/config/cloudinary");
cloudinaryConnect();

//import the routes and mount them
const upload = require("../fileUpload/routes/fileUpload");
app.use("/api/v1/upload", upload);


//starting the server
app.listen(PORT, () => {
    console.log(`server started at ${PORT} succesfully`);
})