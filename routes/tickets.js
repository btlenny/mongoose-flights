const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

// Route to display the list of tickets for a specific flight
router.get('/flights/:id/tickets', async (req, res) => {
    try {
      const flight = await Flight.findById(req.params.id).exec();
      const tickets = await Ticket.find({ flight: flight._id }).exec();
      res.render('flights/show', { flight, tickets });
    } catch (err) {
      // Handle errors
    }
  });
  
  // Route to display the form for creating a new ticket
  router.get('/flights/:id/tickets/new', async (req, res) => {
    try {
      const flight = await Flight.findById(req.params.id).exec();
      res.render('tickets/new', { flight });
    } catch (err) {
      // Handle errors
    }
  });
  
  // Route to create a new ticket
  router.post('/flights/:id/tickets', async (req, res) => {
    try {
      const flight = await Flight.findById(req.params.id).exec();
      const newTicket = new Ticket({
        seat: req.body.seat,
        price: req.body.price,
        flight: flight._id,
      });
      await newTicket.save();
      res.redirect(`/flights/${flight._id}`);
    } catch (err) {
      // Handle errors
    }
  });

module.exports = router;








































// // This router is mounted to a "starts with" path of '/'
// router.get('/flights/:id/tickets/new', ticketsCtrl.new);
// // GET /performers/new (new functionality)
// // router.get('/tickets/new', ticketsCtrl.new);


// // POST /performers (create functionality)
// router.post('/flights/:id/tickets', ticketsCtrl.create);








// module.exports = router; 