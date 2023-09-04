const mongoose = require('mongoose');
 
const accoSchema = new mongoose.Schema({
  owner: {type:mongoose.Schema.Types.ObjectId, ref:'User'},
  title: String,
  address: String,
  photos: [String],
  description: String,
  perks: [String],
  extraInfo:String,
  checkIn: Number,
  checkOut: Number,
  maxGuests: Number,
  price: Number
})

const AccoModel = mongoose.model('Accommodation', accoSchema );

module.exports = AccoModel;