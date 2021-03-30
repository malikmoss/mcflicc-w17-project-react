const express = require('express')
const asyncHandler = require("express-async-handler");

const {singlePublicFileUpload, singleMulterUpload} = require("../../awsS3")
const { Photo } = require("../../db/models")
const router = express.Router();


router.post("/photo",singleMulterUpload("image"), asyncHandler(async (req, res) =>{
    console.log(req.body)
    const authorId = parseInt(req.body.authorId)
    console.log(authorId)
    const profilePhotoURL = await singlePublicFileUpload(req.file)
    const newPhoto = await Photo.create({authorId:authorId,photoURL: profilePhotoURL})

    if (newPhoto) {
        res.json(newPhoto)
    } else {
        res.json({success: false, message: "Something went wrong..."})
    }
}))

router.get("/:authorId", asyncHandler(async function(req, res){
    const authorId = +req.params.authorId
    const photos = await Photo.findAll({where:{authorId}});

    res.json(photos) 
}))

router.get("/", asyncHandler(async function(req, res){
    const photos = await Photo.findAll();

    res.json(photos) 
}))




module.exports = router;