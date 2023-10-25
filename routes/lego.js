var express = require('express');

var router = express.Router();

const LegoModel = require('../models/LegoModel');
// const ToyModel = require('../models/ToyModel');
// router.get('/', (req, res) => {
//    res.render('lego');
//  })
// URL : localhost:3001/student
router.get('/', async (req, res) => {
   // SQL : SELECT * FROM student
   var legos = await LegoModel.find();
   console.log(legos)
   //res.send(students);
   // render ra file view : views/student/index.hbs và gửi kèm data thông qua biến 'students'
   res.render('lego/index', { legos: legos });

})

router.get('/detail/:id', async (req, res) => {
   var id = req.params.id;
   // SELECT * FROM student WHERE id = 'id'
   var lego = await LegoModel.findById(id);
   res.render('lego/detail', { lego: lego });
})

router.get('/delete/:id', async (req, res) => {
   var id = req.params.id;
   await LegoModel.findByIdAndDelete(id);
   console.log('Delete toy succeed');
   res.redirect('/lego');
})

router.get('/add', (req, res) => {
   res.render('lego/add');
   
})

router.post('/add', async (req, res) => {
   var lego = req.body;
   await LegoModel.create(lego);
   console.log('Add toy succeed !');
   res.redirect('/lego');
})

router.get('/edit/:id', async (req, res) => {
   var id = req.params.id;
   var lego = await LegoModel.findById(id);
   res.render('lego/edit', { lego: lego })
})

router.post('/edit/:id', async (req, res) => {
   var id = req.params.id;
   var lego = req.body;
   await LegoModel.findByIdAndUpdate(id, lego);
   console.log('Update toy succeed !');
   res.redirect('/lego');
})

router.post('/search', async (req, res) => {
   var keyword = req.body.name;
   //relative search
   var legos = await LegoModel.find({ name: new RegExp(keyword, "i") });
   res.render('lego/index', { legos: legos });
})

router.get('/nameasc', async (req, res) => {
   //1: ascending,  -1: descending
   var legos = await LegoModel.find().sort({ name: 1 });
   res.render('lego/index', { legos: legos });
})

router.get('/namedesc', async (req, res) => {
   var legos = await LegoModel.find().sort({ name: -1 });
   res.render('lego/index', { legos: legos });
})

module.exports = router;