const Ticket= require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
  create,
  addToFlight,
  new: newTicket
};

async function newTicket(req, res) {
    //Sort performers by their name
    const tickets = await Ticket.find({}).sort('name');
    res.render('tickets/new', { title: 'Add Ticket', tickets });
  }
  
async function create(req, res) {
  const flight = await Flight.findById(req.params.id);
  // We can push (or unshift) subdocs into Mongoose arrays
  flight.tickets.push(req.body);
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
    flight.tickets.push(req.body.ticketId);
    await flight.save();
    res.redirect(`/flights/${flight._id}`)
  }