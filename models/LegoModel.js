var mongoose = require('mongoose');
var LegoSchema = mongoose.Schema(
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
      category:{
         type:String,
      }

   }
);
var LegoModel = mongoose.model('lego', LegoSchema, 'lego');
module.exports = LegoModel;