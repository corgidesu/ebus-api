/**
* Login.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true
    },
    mobile: {
      type: 'integer',
      required: true
    },
    email: {
      type: 'string',
      required: true
    },
    address: {
      type: 'string'
    },
    // Like an identity card or passport number
    identity : {
      type: 'string'
    },
    dob: {
      type: 'date'
    },
    device: {
      type: 'string'
    }

  }
};

