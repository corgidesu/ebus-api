/**
* Trip.js
*
* @description :: Trip contains route, bus, driver, and customers for a given time. It represents everything about a trip. Queries for possible bus trips will return this information
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	startRoute: {
  		type: 'integer',
  		via: 'routes',
  		required: true
  	},
  	endRoute: {
  		type: 'integer',
  		via: 'routes',
  		required: true
  	},
  	price: {
  		type: 'float',
  		required: true
  	},
  	expectedStartDate: { /* supposed departure date */
  		type: 'datetime',
  		required: true
  	},
  	startDate: { /* actual start date of the bus departing ... not sure how we will capture this exactly */
  		type: 'datetime',
  		required: true
  	},
  	endDate: {
  		type: 'datetime'
  	},
  	bus: {
  		type: 'integer',
  		via: 'bus',
  		required: true
  	},
  	driver: {
  		type: 'integer',
  		via: 'driver',
  		required: true
  	},

  	/* Where does our customer sit on the bus */
  	bookings: {
  		type: 'array',
  		via: 'booking',
  		required: true
  	},

  	estimateTime: {	/* estimate on the number of hours that this bus will take to reach the destination */
  		type: 'float',
  		required: true
  	},

  	actualTime: {
  		type: 'float',
  		required: true
  	}
  }
};

