var mongoose = require('mongoose');
var ToySchema = mongoose.Schema(
   {

      name: {
         type: String,
         required: [true, 'Name can not be empty']
      },
      dob: Date,
      image: 
      { type: String
     },
     origin: {
      type: String,
   }, 
      price: {
         type: String,
      },
      description:{
         type:String,
      },

   }
);
var ToyModel = mongoose.model('car', ToySchema, 'car');
module.exports = ToyModel;