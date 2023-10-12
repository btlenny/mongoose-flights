const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    create,
    index,
    show,
  };

  function newFlight(req, res) {
    // We'll want to be able to render an
    // errorMsg if the create action fails
    res.render('flights/new', { errorMsg: '' });
  }

  function create(req, res) {
    // The model is responsible for creating data
    Flight.create(req.body);
    // Do a redirect anytime data is changed
    res.redirect('/flights');
  }

  //this will show all the flights in my DB
  function index(req,res) {
   Flight.find({})
   .then((flights) => {
      res.render('flights/index', {flights})
   })
  }



  async function show(req, res) {
    const flight= await Flight.findById(req.params.id);
    console.log('Flight ID:', flight._id);
    res.render('flights/show', { title: 'Flight Destination', flight });
  }

  