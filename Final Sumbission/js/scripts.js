/* GA assignment Citypix

** John Webster


/******* pseudocode example ***************

Build array with citynames

on dropdown
  Get cityName from field
  store cityName

if cityName =  "NYC"
    then change background to "nyc.jpg"
  elseif cityName = "SF"
    then change background to "sf.jpg"
  elseif cityName = "LA"
    then change background to "la.jpg"
  elseif cityName = "ATX"
    then change background to "austin.jpg"
  elseif cityName = "SYD"
    then change background to "sydney.jpg"
  else change background to cityPix default


/******end Pseudocode example *****************/


$(document).ready(start); //Use the ```$.ready()``` handler to delay your code from executing until all DOM assets have been loaded



function start() {
    var cityName = ["Please choose a city", "NYC", "SF", "LA", "ATX", "SYD"]; /*Create an array with the following values: "NYC", "SF", "LA", "ATX", "SYD"; use the array to add values */
    $.each(cityName, function(count, city) { /*using an ```.each``` loop in JavaScript */
        $('#city-type').append($('<option></option>').val(city).html(city)); /* Use $.append() in your iteration on the drop-down menu - Get the value of user input using ```$.val()```*/
    });

    $('#city-type').change(changeBackground); /*- Use the ```$.change``` event handler to capture user actions*/

    function changeBackground() {
        var citySelected = $('#city-type').val();
        if (citySelected == 'NYC') { /* Use ```if/else if/else ``` conditionals to control the flow of your application*/
            $('body').attr('class', 'nyc'); /* Use the ```$.attr()``` function to update html classes*/
        } else if (citySelected == 'SF') {
            $('body').attr('class', 'sf');
        } else if (citySelected == 'LA') {
            $('body').attr('class', 'la');
        } else if (citySelected == 'ATX') {
            $('body').attr('class', 'austin');
        } else if (citySelected == 'SYD') {
            $('body').attr('class', 'sydney');
        } else
            $('body').attr('class', 'cityPixDefault');
    };



} //start
