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
    var imgAct = "images/"+myActivity+".png";
    $("#activityImg").attr("src",imgAct);
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
