//import karlo pehle models ko
const FileSchema = require("../models/File");

exports.localFileUpload = async (req, res) => {
    try{
        //file ko karo fetcg
        const file = req.files.file;
        console.log("file extracted", file);

        //ab path batao server ka
        //__dirname - ye mujhe current directory i.e abhi controller mein hun to uska path degi
        //so path aisa hai ki, mere controller folder ke ander, ek files naam ka folder hai and saath mein date.now() kar dia for uniqueness
        const path = __dirname + "/files/" + Date.now() + `.${file.name.split('.')[3]}`;
        console.log("path->", path);

        //ab jo file extract ki thi, usko is path mein move karvado
        file.mv(path, (error) => {
            console.log(error);
        })

        return res.status(200).json({
            success:true,
            message:"file locally uploaded successfully",
        });
    }
    catch (error) {
        return res.status(400).json({
            success:false,
            message:"error while uploading file to local server",
        })
    }
}