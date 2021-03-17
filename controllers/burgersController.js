const router = require("express").Router();
const burger = require("../models/burger");

//get request to get data from burger table
router.get("/", (req, res) => {
  burger.all((data) => {
    const bData = {
        //this is what goes to handlebars
      burgers: data,
    };
    res.render("index", bData);
  });
});

//inserting data and then returning to the home page
router.post('/insertOne', (req, res) => {
    burger.insert(req.body.burger_name, bData => {
        res.redirect('/')
    })
})

