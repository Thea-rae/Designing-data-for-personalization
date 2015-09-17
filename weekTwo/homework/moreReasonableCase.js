$(document).ready(function(){
  var timeVal;
  var dayVal;
  var activity;
  var location;

  $("#timeSelector").change(function(){
      timeVal = $(this).val()
      console.log(timeVal);
      var activity = whatamidoing(dayVal, timeVal);
    });
  $("#daySelector").change(function(){
      dayVal = $(this).val()
      console.log(dayVal);
    });
  $("#selectors").change(function(){
    console.log(location +", " +activity);
    var imgLoc = "images/"+location+".png";
    var imgAct = "images/"+activity+".png";
    $("#locationImg").attr("src",imgLoc);
    $("#activityImg").attr("src",imgAct);
  });
});