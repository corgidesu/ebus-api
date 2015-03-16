/**
* Booking.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	/* customer id */
  	customer: {
  		type: 'integer',
  		via: 'Login',
  		required: true
  	},
  	trip: {
  		type: 'integer',
  		via: 'Trip',
      required: true
  	},
  	startDate: {
  		type: 'datetime',
  		required: true
  	},
  	seating: { /* seat number */
  		type: 'integer',
  		required: true
  	}
  }
};

