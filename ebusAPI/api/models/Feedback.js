/**
* Feedback.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    customer: {
      type: 'integer',
      required: true
    },    
    rating: {
      type: 'integer',
      enum: [1, 2, 3, 4, 5],
      required: true
    },
    /* Booking contains all info required, we are feedback on booking */
    booking: {
      type: 'integer',
      required: true
    },
    comment: {
      type: 'string'
    }
  }
};

