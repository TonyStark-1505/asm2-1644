var express = require('express');
var CarModel = require("../models/CarModel")
var LegoModel = require("../models/LegoModel")
var router = express.Router();
var express = require('express');
const UserModel = require('../models/UserModel');
var router = express.Router();

// router.get('/', (req, res) => {
//   res.render('customer');
// })
router.get('/', async (req, res) => {
  // SQL : SELECT * FROM student
  var legos = await LegoModel.find();
  var cars = await CarModel.find();
  console.log(legos);
  //res.send(students);
  // render ra file view : views/student/index.hbs và gửi kèm data thông qua biến 'students'
  res.render('customer/index', { 
     legos: legos,
     cars: cars,
   });
})

router.get('/detail/:id', async (req, res) => {
  var id = req.params.id;
  // SELECT * FROM student WHERE id = 'id'
  var legos = await LegoModel.findById(id);
  var cars = await CarModel.findById(id);
  res.render('customer/single', { legos: legos,
    cars: cars, });
})
module.exports = router;


// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;