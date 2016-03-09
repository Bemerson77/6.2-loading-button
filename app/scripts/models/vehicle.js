var Backbone = require('backbone');




var Vehicle = Backbone.Model.extend({

});

var Vehicles = Backbone.Collection.extend({
  model: Vehicle,
  url: 'http://swapi.co/api/vehicles/',
  parse: function(data){
    return data.results;
  }

});


module.exports = {
  'Vehicle': Vehicle,
  'Vehicles': Vehicles
};
