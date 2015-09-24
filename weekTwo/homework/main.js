  var days;
  var myActivity;
  var myLocation;
  var schedule;
  var mylat;
  var mylng;

$(document).ready(function(){

  $("#selectors").change(function(){
    var timeVal = $('#timeSelector').val();
    var dayVal = $('#daySelector').val();
    myDay(dayVal, timeVal);
    image();
    initMap();
    console.log(myActivity +", "+mylat+", "+mylng);
  });
});

$.getJSON("days.json", parselife);

function parselife(data){
  days = data.days;
}
function myDay(day, time){
  console.log(day,time);
  for(i=0; i<days.length; i++){
    if (days[i].day == day){
      var schedule =days[i].schedule;
      for(j=0; j<schedule.length; j++){
        if( schedule[j].time == time){
          myActivity = schedule[j].activity;
          myLocation = schedule[j].location;
          for(var k=0; k < myLocation.length; k++){
            mylat = myLocation[k].lat;
            mylng = myLocation[k].lng;
          }
        }
      }
    }
  }
}

var id = "d76eab0645a34b1598e211af5370dd4d";

function image (){
  $.ajax({
    type: "GET",
    dataType: "jsonp",
    cache: false,
    url: "https://api.instagram.com/v1/tags/" + myActivity + "/media/recent?client_id=" + id,
    success: function(response) {
      var photoCount = 1;
      var length = response.data != 'undefined' ? response.data.length : 0;
      var limit = photoCount != null && photoCount < length ? photoCount : length;
      if(limit > 0) {
        for(var i = 0; i < limit; i++) {
          $('<img>', {
            src: response.data[i].images.standard_resolution.url
          }).appendTo($("#activityImg"));
        }
      } else {
          var imgAct = "images/"+myActivity+".png";
          $("#activityImg").attr("src",imgAct);
      }
    }
  });
}

function initMap() {
  // Specify features and elements to define styles.
  var styleArray = [
    {
      featureType: "all",
      stylers: [
       { saturation: -90 }
      ]
    },{
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { hue: "#00ffee" },
        { saturation: 150 }
      ]
    },
  ];

  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: mylat, lng: mylng},
    scrollwheel: false,
    // Apply the map style array to the map.
    styles: styleArray,
    zoom: 15
  });
}
