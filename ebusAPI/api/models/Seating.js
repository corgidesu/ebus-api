/**
* Seating.js
*
* @description :: Available seats on the bus; result of calling an external system to find availability of bus seats given the trip details
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	seatNumber: {
  		type: 'integer',
  		required: true
  	},
  	trip: { /* trip has bus reference; ideally we already know the trip we want and we simply choose the seats */
  		type: 'integer',
  		via: 'trip'
  	}
  }
};

