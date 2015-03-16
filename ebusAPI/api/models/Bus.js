/**
* Bus.js
*
* @description :: Definition of the bus; we will need to integrate with his system to get information about Buses. I'll keep this simple for now
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    lastMaintenance: {
    	type: 'datetime',
    	required: true
    },
    name: {
    	type: 'string',
    	required: true
    }
  }
};

