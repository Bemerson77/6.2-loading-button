var $ = require('jquery');

var models = require('./models/vehicle');

var vehicleCollection = new models.Vehicles();

$('.submit-btn').click(function(){

  $('.title').html('Loading...');
  $('.submit-btn').attr("disabled", true);

  vehicleCollection.fetch().done(function(){

    $('.title').html('Submit');
    $('.submit-btn').removeAttr("disabled");


       $('.list').empty();
       vehicleCollection.each(function(vehicles){

         $('.list').append("<li>" + vehicles.get("model") + "</li>");
       });



  });

});
