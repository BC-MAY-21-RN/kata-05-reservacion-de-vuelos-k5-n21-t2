const JSON = require('./datasets/BookingLocations.json');

const Find = id => {
  return JSON.find(e => e.id.toString() === id);
};

const BookingLocations = {
  JSON,
  Find,
};

export default BookingLocations;
