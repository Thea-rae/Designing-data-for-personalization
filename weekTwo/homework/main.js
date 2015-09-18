  var days;
  var myActivity;
  var myLocation;
  var schedule;
  var schedule;
  var mylat;
  var mylng;

$(document).ready(function(){

  $("#selectors").change(function(){
    var timeVal = $('#timeSelector').val();
    var dayVal = $('#daySelector').val();
    myDay(dayVal, timeVal);
    var imgAct = "images/"+myActivity+".png";
    $("#activityImg").attr("src",imgAct);
    initMap();
  });
});

$.getJSON("days.json", parselife);

function parselife(data){
  days = data.days;
  for(var i =0; i < days.length; i++){
    console.log(days[i].day);
    schedule = days[i].schedule;
    for(var j =0; j< schedule.length; j++){
      console.log(schedule[j].time);
       myLocation = schedule[j].location;
    }
  }
}
function myDay(day, time){
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
