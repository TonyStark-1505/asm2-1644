var express = require('express');
var router = express.Router();

const CarModel = require('../models/CarModel');
// const ToyModel = require('../models/ToyModel');
// router.get('/', (req, res) => {
//    res.render('car');
//  })
// URL : localhost:3001/student
router.get('/', async (req, res) => {
   // SQL : SELECT * FROM student
   var cars = await CarModel.find();
   //res.send(students);
   // render ra file view : views/student/index.hbs và gửi kèm data thông qua biến 'students'
   res.render('car/index', { cars: cars });
})

router.get('/detail/:id', async (req, res) => {
   var id = req.params.id;
   // SELECT * FROM student WHERE id = 'id'
   var car = await CarModel.findById(id);
   res.render('car/detail', { car: car });
})

router.get('/delete/:id', async (req, res) => {
   var id = req.params.id;
   await CarModel.findByIdAndDelete(id);
   console.log('Delete toy succeed');
   res.redirect('/car');
})

router.get('/add', (req, res) => {
   res.render('car/add');
})

router.post('/add', async (req, res) => {
   var car = req.body;
   await CarModel.create(car);
   console.log('Add toy succeed !');
   res.redirect('/car');
})

router.get('/edit/:id', async (req, res) => {
   var id = req.params.id;
   var car = await CarModel.findById(id);
   res.render('car/edit', { car: car })
})

router.post('/edit/:id', async (req, res) => {
   var id = req.params.id;
   var car = req.body;
   await CarModel.findByIdAndUpdate(id, car);
   console.log('Update toy succeed !');
   res.redirect('/car');
})

router.post('/search', async (req, res) => {
   var keyword = req.body.name;
   //relative search
   var cars = await CarModel.find({ name: new RegExp(keyword, "i") });
   res.render('car/index', { cars: cars });
})

router.get('/nameasc', async (req, res) => {
   //1: ascending,  -1: descending
   var cars = await CarModel.find().sort({ name: 1 });
   res.render('car/index', { cars:cars });
})

router.get('/namedesc', async (req, res) => {
   var cars = await CarModel.find().sort({ name: -1 });
   res.render('car/index', { cars: cars });
})

module.exports = router;