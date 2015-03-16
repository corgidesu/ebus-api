/**
* Routes.js
*
* @description :: This is a bus route that represents the selectable bus routes  
*/

module.exports = {

  attributes: {
    code: {
    	type: 'string',
    	required: true
    },
    name: {
    	type: 'string',
    	required: true
    },
    address: {
    	type: 'string',
    	required: true
    },
    description: {
        type: 'string'        
    },
    linkref: {
        type: 'string'
    },
    longitude: {
        type: 'float',
        required: true
    },
    latitude: {
        type: 'float',
        required: true
    },
    /* list of supported destinations for the selected route */
    supportedDestinations: {
        type: 'array',
        via: "routes"
    }
  }
};

