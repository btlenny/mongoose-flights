const Flight = require('../models/flight');

module.exports = {
  create
};

async function create(req, res) {
  console.log('imhere');
  const flight = await Flight.findById(req.params.id);
  console.log('blenny', flight)
  flight.destinations.push(req.body);
  try {
   
    await flight.save();
    res.redirect(`/flights/${flight._id}`);
  } catch (err) {
    console.log(err);
  }
}
function createTicket(req, res) {
  // The model is responsible for creating data
  Flight.findById(req.params.id, (err, flight) => {
      if (err) {
          console.error(err);
          // Handle errors, such as rendering an error page or sending an error response
          res.status(500).send('Error adding ticket');
      } else {
          flight.tickets.push(req.body);
          // Do a redirect anytime data is changed
          flight.save((err) => {
              if (err) {
                  console.error(err);
                  // Handle errors here, such as rendering an error page or sending an error response
                  res.status(500).send('Error adding ticket');
              } else {
                  // Redirect to the flight details page after adding the ticket
                  res.redirect('/flights/' + flight._id);
              }
          });
      }
  });
}



