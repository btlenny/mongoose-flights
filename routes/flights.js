const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');

// List all flights
router.get('/', flightsCtrl.index);


// Display the form to create a new flight
router.get('/new', flightsCtrl.new);

router.get('/:id', flightsCtrl.show); 

// Handle the creation of a new flight
router.post('/', flightsCtrl.create);








module.exports = router;