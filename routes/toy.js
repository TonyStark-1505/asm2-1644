var express = require('express');
var CarModel = require("../models/CarModel")
var LegoModel = require("../models/LegoModel")
var router = express.Router();
var express = require('express');
const UserModel = require('../models/UserModel');
var router = express.Router();


// URL : localhost:3001/student
router.get('/', async (req, res) => {
   // SQL : SELECT * FROM student
   var legos = await LegoModel.find();
   var cars = await CarModel.find();
   console.log(legos);
   //res.send(students);
   // render ra file view : views/student/index.hbs và gửi kèm data thông qua biến 'students'
   res.render('toy/index', { 
      legos: legos,
      cars: cars,
    });
})
// router.get("/", requireAdmin, async (req, res) => {
//    var boy = await BoyModel.find();
//    var girl = await GirlModel.find();
//    res.render("admin/index", {
//      boy: boy,
//      girl: girl,
//    });
//  });

router.get('/detail/:id', async (req, res) => {
   var id = req.params.id;
   // SELECT * FROM student WHERE id = 'id'
   var toy = await ToyModel.findById(id);
   res.render('toy/detail', { toy: toy });
})

router.get('/delete/:id', async (req, res) => {
   var id = req.params.id;
   await ToyModel.findByIdAndDelete(id);
   console.log('Delete toy succeed');
   res.redirect('/toy');
})

router.get('/add', (req, res) => {
   res.render('toy/add');
})

router.post('/add', async (req, res) => {
   var description = req.body.description;
   var toy=await CarModel.create(toy);
   if(description == "car")
   {
      await CarModel.create(toy);
   }else if(description == "lego"){
      await LegoModel.create(toy);
   }
   await ToyModel.create(toy);
   console.log('Add toy succeed !');
   res.redirect('/toy');
})

router.get('/edit/:id', async (req, res) => {
   var id = req.params.id;
   var toy = await ToyModel.findById(id);
   res.render('toy/edit', { toy: toy })
})

router.post('/edit/:id', async (req, res) => {
   var id = req.params.id;
   var toy = req.body;
   await ToyModel.findByIdAndUpdate(id, toy);
   console.log('Update toy succeed !');
   res.redirect('/toy');
})

router.post('/search', async (req, res) => {
   var keyword = req.body.name;
   //relative search
   var legos = await LegoModel.find({ name: new RegExp(keyword, "i") });
   var cars = await CarModel.find({ name: new RegExp(keyword, "i") });
   console.log(legos);
   //res.send(students);
   // render ra file view : views/student/index.hbs và gửi kèm data thông qua biến 'students'
   res.render('toy/index', { 
      legos: legos,
      cars: cars,
    });
   // var toys = await ToyModel.find({ name: new RegExp(keyword, "i") });
   // res.render('toy/index', {legos: legos,
   //    cars: cars, });
})

router.get('/nameasc', async (req, res) => {
   //1: ascending,  -1: descending
   var toys = await ToyModel.find().sort({ name: 1 });
   res.render('toy/index', { toys: toys });
})

router.get('/namedesc', async (req, res) => {
   var toys = await ToyModel.find().sort({ name: -1 });
   res.render('toy/index', { toys: toys });
})

module.exports = router;