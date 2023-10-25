var express = require('express');
var CategoryModel = require("../models/CategoryModel")

router.get('/', async (req, res) => {
    // SQL : SELECT * FROM student
    var categories = await CategoryModel.find();
    console.log(categories);
    //res.send(students);
    // render ra file view : views/student/index.hbs và gửi kèm data thông qua biến 'students'
    res.render('category/index', { 
        categories: categories,
     });
  })