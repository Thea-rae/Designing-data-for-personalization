$.getJSON("days.json", parselife);
  var days;
  var timeVal;
  var dayVal;
  var myActivity;
  var myLocation;
  var schedule;
  var mylat;
  var mylng;

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
        if( schedule[j].time == timeVal){
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
