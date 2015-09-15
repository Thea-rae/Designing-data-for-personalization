$.getJSON("days.json", parselife);
  var days;
  var timeVal;
  var dayVal;
  var myActivity;
  var myLocation;
  var schedule;


$(document).ready(function(){

  $("#timeSelector").change(function(){
      timeVal = $(this).val()
      console.log(timeVal);
      var myActivity = whatamidoing(dayVal, timeVal);
    });
  $("#daySelector").change(function(){
      dayVal = $(this).val()
      console.log(dayVal);
    });
  $("#selectors").change(function(){
    var imgLoc = "images/"+myLocation+".png";
    var imgAct = "images/"+myActivity+".png";
    $("#locationImg").attr("src",imgLoc);
    $("#activityImg").attr("src",imgAct);
  });
});

function parselife(data){
  days = data.days;
  for(var i =0; i < days.length; i++){
    console.log(days[i].day);
    schedule = days[i].schedule;
    for(var j =0; j< schedule.length; j++){
      console.log(schedule[j].time);
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
        }
      }
    }
  }
}
