const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');

// Display the form to create a new flight
router.get('/new', flightsCtrl.new);

// Handle the creation of a new flight
router.post('/', flightsCtrl.create);

router.get('/:id', flightsCtrl.show); 

// List all flights
router.get('/', flightsCtrl.index);




module.exports = router;