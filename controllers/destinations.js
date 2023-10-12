const Flight = require('./flights');

module.exports = {
  create
};

async function create(req, res) {
  try {
    const flightId = req.params.id;
    console.log('Flight ID:', flightId);
    // ...rest of your code...
  } catch (err) {
    console.error(err);
    res.status(500).send('Error adding destination');
  }
}