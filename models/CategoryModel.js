var mongoose = require('mongoose');
var CategorySchema = mongoose.Schema(
   {

      name: {
         type: String,
         required: [true, 'Name can not be empty']
      }
   }
);
var CategoryModel = mongoose.model('category', CategorySchema, 'category');
module.exports = CategoryModel;