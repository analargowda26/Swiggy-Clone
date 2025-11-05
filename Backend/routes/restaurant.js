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

router.get("/:id",async(req,res) => {
    try{
const restaurant  = await Restaurant.findById(req.params.id);

if(!restaurant){
    return res.status(404).json({
        message:"Restaurant not found",
    });

}
res.status(200).json({
    message:"Get Restaurant successfully",
    restaurant: restaurant,
});
    }catch(error){
        console.log ("Error  fetching  restaurant", error)
        res.status(500).json({
            message:"Server error",
        });
    }
});


module.exports = router;