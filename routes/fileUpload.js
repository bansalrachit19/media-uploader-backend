const express = require("express");
const router = express.Router();

//import karo saare controllers
const {imageUpload} = require("../controllers/imageUpload");
const {videoUpload} = require("../controllers/videoUpload");
const {imageReduceUpload} = require("../controllers/imageReduceUpload");
const {localFileUpload} = require("../controllers/localFileUpload");

//ab sab routes ko controllers ke saath one to one map karvado
router.post("/imageUpload", imageUpload);
router.post("/videoUpload", videoUpload);
// router.post("/imageReduceUpload", imageReduceUpload);
router.post("/localFileUpload", localFileUpload);

module.exports = router;