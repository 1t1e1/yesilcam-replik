
var uniqueRandomArray = require('unique-random-array');
var repliks = require('./data/replik-depo.json');

module.exports = {
  all: repliks,
  random: uniqueRandomArray(repliks)
}; 