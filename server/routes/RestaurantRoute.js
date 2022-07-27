// This file will contain all the routes for restaurant

const express = require("express");
const { RestaurantModel } = require("../model/DBModels");

// Create internal router:
const router = express.Router();

// GET - Get all restaurants:
router.get("/", (req, res) => {
  // find() - is a mongoDB command to get all objects
  // exec() -> will run the command in the db.
  RestaurantModel.find({}).exec((err, restaurants) => {
    if (err) {
      console.log(err.message);
      console.log("COME ON");
    } else res.json(restaurants);
  });
});

// POST - Add a new Restaurant(object) sto the collection
// http://localhost:3000/restaurantModel/add
router.post("/add", (req, res) => {
  // Create a new student, and get the data from the request body
  let newRestaurant = new RestaurantModel();
  newRestaurant.name = req.body.name;
  newRestaurant.img = req.body.img;
  newRestaurant.address = req.body.address;
  newRestaurant.contact = req.body.contact;
  newRestaurant.openingHours = req.body.openingHours;
  newRestaurant.grade = req.body.grade;

  newRestaurant.save((err, restaurant) => {
    if (err) {
      res.status(404);
      res.send("Failed saving...");
    } else {
      res.status(201);
      res.send({ message: "New Restaurant was added successfully" });
    }
  });
});

// PUT - Update the Restaurant's grade:
// params - restaurant's name, body - new grade.
router.put("/update/:name", (req, res) => {
  // findOneAndUpdate({ who to update },{ new data }, (err, success))
  console.log(req.params.name);
  console.log(req.body.name);
  RestaurantModel.findOneAndUpdate(
    { name: req.params.name },
    { $set: { grade: req.body.newGrade } },
    (err, updatedStudent) => {
      if (err || updatedStudent === null) {
        res.status(404);
        console.log("Failed server");
        res.send("Failed updating restaurant's grade...");
      } else {
        res.status(200);
        console.log("success server");
        res.send(`Restaurant's grade was updated successfully`);
      }
    }
  );
});

// export the file
module.exports = router;
