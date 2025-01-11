//model ko import karvao
const FileModel = require("../models/File");
//yahan par mein cloudinary mein upload karunga apni image
const cloudinary = require("cloudinary");

//function to check if the file type is supported or not
function isAllowedType(currtype, allowedTypesArr){
    return allowedTypesArr.includes(currtype);
}

//cloudinary pe file ko upload karne ke liye function
async function uploadFileToCloudinary(file, folder){
    const options = {folder};
    options.resource_type = "auto";
    console.log(options);
     // cloudinary.uploader.upload(file.tempFilePath, options) - function to upload on cloudinary
    return await cloudinary.uploader.upload(file.tempFilePath, options);
}

exports.videoUpload = async (req, res) => {
    try{
        //pehle sab info ftch karlo req mein se
        const {name, email, tags} = req.body;
        console.log(name, email, tags);
        const file = req.files.video;
        console.log(file);

        //validation karlo file ke type ki
        const allowedTypes = ["mp4", "mpv"];
        const type = file.name.split('.')[1].toLowerCase();

        if(!isAllowedType(type, allowedTypes)){
            return res.status(400).json({
                success:false,
                message:"file type not supported"
            });
        }

        //ab agar file ki type sahi hai, that means we can upload it to cloudinary
        const response = await uploadFileToCloudinary(file, "learning");

        console.log(response);
        
        //ab karna hai db mein save
        const dbFileUpload = FileModel.create({
            name, 
            email, 
            tags, 
            imageUrl:response.secure_url,
        })

        return res.status(200).json({
            success:true,
            imageUrl:response.secure_url,
            message:"file uploaded to cloudianry successfully"
        });
    }

    catch (error) {
        console.error(error);
        return res.status(400).json({
            sucscess:false,
            message:"sorry bro, kuch galti ki tune"
        });
    }
}