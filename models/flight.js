const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
      type: String,
      enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    
    },
    arrival: {
      type: Date,
    },
    
  });
  
  // Compile the schema into a model and export it


const flightSchema = new Schema({
  airline: {
      type: String,
      enum: ['American', 'Southwest', 'United']
  },
  airport: {
      type: String,
      enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
      default: 'DEN',
  },
  flightNo: {
      type: Number,
      required: true,
      min: 10,
      max: 9999,
  },
  departs: {
      type: Date,
      // required: true,
      default: new Date(+new Date() + 7*24*60*60*1000),
  },
  destinations: [destinationSchema]
});

module.exports = mongoose.model('Flight', flightSchema);