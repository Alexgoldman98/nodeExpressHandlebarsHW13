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
router.post("/insertOne", (req, res) => {
  burger.insert(req.body.burger_name, () => {
    res.redirect("/");
  });
});

router.put("/updateOne/:id", (req, res) => {
  console.log('hello')
  const colValue = `id = ${req.params.id}`;
  
  burger.update({
    devoured: 1,
}, colValue, (result) => {
    if (result.changedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

module.exports = router;
