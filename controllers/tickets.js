const Ticket= require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
  create,
  addToFlight,
  new: newTicket
};

async function newTicket(req, res) {
    //search and retrieve by specific flight
    const flight = await Flight.findById(req.param.id);
    const flights = await Flight.find({});
    res.render('tickets/new', {flight, flights});
  }
  
async function create(req, res) {
  const flight = await Flight.findById(req.params.id);
  req.body.flight = req.params.id;
  // We can push (or unshift) subdocs into Mongoose arrays
  Ticket.create(req.body);
  try {
    // Save any changes made to the movie doc
    await flight.save();
  } catch (err) {
    console.log(err);
  }
  // Respond to the Request (redirect if data has been changed)
  res.redirect(`/flights/${flight._id}`);
}

async function addToFlight(req, res) {
  const flight = await Flight.findById(req.params.id);
  
  // Check if the flight object has a 'tickets' array and initialize it if it doesn't exist
  if (!flight.tickets) {
      flight.tickets = [];
  }
  
  flight.tickets.push(req.body.ticketId);
  
  await flight.save();
  res.redirect(`/flights/${flight._id}`);
}