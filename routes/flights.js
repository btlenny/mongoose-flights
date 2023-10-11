var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');

/* GET users listing. */
router.get('/new', flightsCtrl.new);

router.post('/', flightsCtrl.create);
//locahost: 3000/movies
// GET /movies/:id (show functionality) MUST be below new route
router.get('/:id', flightsCtrl.show);

router.get('/', flightsCtrl.index)

module.exports = router;
