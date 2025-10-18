const express = require("express");
const router = express.Router();
const Restaurant = require("../models/Restaurant");


router.get("/",async(req,res) => {
    try{
const restaurants  = await Restaurant.find();
res.status(200).json({
    message:"Get all the Restaurant",
    restaurants: restaurants,
});
    }catch(error){
        console.log ("Error  fetching  restaurant", error)
        res.status(500).json({
            message:"Server error",
        });
    }
});

module.exports = router;