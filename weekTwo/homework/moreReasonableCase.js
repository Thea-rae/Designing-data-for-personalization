$(document).ready(function(){
  var timeVal;
  var dayVal;
  var activity;
  var location;

  $("#timeSelector").change(function(){
      timeVal = $(this).val()
      console.log(timeVal);
      $("#daySelector").change(function(){
              dayVal = $(this).val()
              console.log(dayVal);
      switch(timeVal){
        case "00:00":
          location = "home";
          activity = "sleeping";
          break;
        case "01:00":
          location = "home";
          activity = "sleeping";
          break;
        case "02:00":
          location = "home";
          activity = "sleeping";
          break;
        case "03:00":
          location = "home";
          activity = "sleeping";
          break;
        case "04:00":
          location = "home";
          activity = "sleeping";
          break;
        case "05:00":
          location = "home";
          activity = "sleeping";
          break;
        case "06:00":
          location = "home";
          activity = "sleeping";
          break;
        case "07:00":
          location = "home";
          activity = "sleeping";
          break;
        case "08:00":
          switch(dayVal){
            case "friday":
              location ="home";
              activity ="sleeping";
              break;
            case "saturday":
              location ="home";
              activity ="sleeping";
              break;
            case "sunday":
              location ="home";
              activity ="sleeping";
              break;
            default:
              loaction ="home";
              activity ="caffinaitng";
              break;
            }
          break;
        case "09:00":
          switch(dayVal){
            case"friday":
              location ="home";
              activity ="sleeping";
              break;
            case"saturday":
              location ="home";
              activity ="sleeping";
              break;
            case"sunday":
              location ="home";
              activity ="sleeping";
              break;
            default:
              loaction ="home";
              activity ="workingout";
              break;
            }
          break;
        case "10:00":
          switch(dayVal){
            case"friday":
              location ="home";
              activity ="caffinating";
              break;
            case"saturday":
              location ="home";
              activity ="caffinating";
              break;
            case"sunday":
              location ="home";
              activity ="caffinating";
              break;
            default:
              loaction ="home";
              activity ="workingout";
              break;
            }
          break;
        case "11:00":
            if(dayVal == "friday" || "saturday" || "sunday"){
              location ="home";
              activity ="workingout";
            } else if(dayVal == "tuesday"){
              location ="brooklyn";
              activity ="biking";
            } else{
              loaction ="home";
              activity ="cooking";
            }
          break;
        case "12:00":
            if(dayVal == "tuesday"){
              location ="itp";
              activity ="class";
            } else if (dayVal == "saturday"){
              location ="brooklyn";
              activity ="CSA";
            } else {
              location ="home";
              activity ="homework";
            }
          break;
        case "13:00":
            if(dayVal == "monday" || "wednesday"){
              location ="bkzoo";
              activity ="training";
            } else if (dayVal == "tuesday"){
              location ="itp";
              activity ="class";
            } else {
              location ="home";
              activity ="homework";
            }
          break;
        case "14:00":
            if(dayVal == "monday" || "wednesday"){
              location ="bkzoo";
              activity ="training";
            } else if (dayVal == "tuesday"){
              location ="itp";
              activity ="class";
            } else {
              location ="home";
              activity ="homework";
            }
          break;
        case "15:00":
            if(dayVal == "tuesday"){
              location ="itp";
              activity ="handstanding";
            } else {
              location ="home";
              activity ="homework";
            }
          break;
        case "16:00":
            if(dayVal == "tuesday"){
              location ="itp";
              activity ="class";
            } else if(dayVal == "saturday"){
              loaction ="mccarren";
              activity ="handstanding";
            }else {
              location ="home";
              activity ="homework";
            }
          break;
        case "17:00":
            if(dayVal == "tuesday"){
              location ="itp";
              activity ="class";
            } else if(dayVal == "saturday"){
              loaction ="mccarren";
              activity ="handstanding";
            }else if(dayVal == "monday" || "thursday"){
              loaction ="home";
              activity ="cooking"
            }else if(dayVal == "sunday"){
              location ="bkzoo";
              activity="teaching";
            }else{
              location ="home";
              activity ="homework";
            }
          break;
        case "18:00":
            if(dayVal == "tuesday"){
              location ="itp";
              activity ="handstanding";
            }else if(dayVal == "monday" || "thursday"){
              loaction ="brooklyn";
              activity ="biking"
            }else if(dayVal == "sunday"){
              location ="bkzoo";
              activity="teaching";
            }else{
              location ="home";
              activity ="homework";
            }
          break;
        case "19:00":
            if(dayVal == "thursday"){
              location ="itp";
              activity ="class";
            }else if(dayVal == "monday"){
              loaction ="poly";
              activity ="class"
            }else if(dayVal == "wednesday" || "tuesday"){
              location="cs"
              activity="class"
            }else if(dayVal == "sunday"){
              location ="bkzoo";
              activity="training";
            }else{
              location ="home";
              activity ="homework";
            }
          break;
        case "20:00":
            if(dayVal == "thursday"){
              location ="itp";
              activity ="class";
            }else if(dayVal == "monday"){
              loaction ="poly";
              activity ="class"
            }else if(dayVal == "wednesday" || "tuesday"){
              location="cs"
              activity="class"
            }else if(dayVal == "sunday" || "friday"){
              location ="bkzoo";
              activity="training";
            }else{
              location ="home";
              activity ="homework";
            }
          break;
        case "21:00":
            if(dayVal == "thursday"){
              location ="itp";
              activity ="class";
            }else if(dayVal == "monday"){
              loaction ="poly";
              activity ="class"
            }else if(dayVal =="tuesday"){
              location="cs"
              activity="class"
            }else if(dayVal == "sunday" || "friday"){
              location ="bkzoo";
              activity="training";
            }else if (dayVal == "wednesday"){
              location="streb";
              activity="flying";
            }else{
              location ="home";
              activity ="homework";
            }
          break;
        case "22:00":
            if(dayVal == "sunday" || "friday"){
              location ="bkzoo";
              activity="training";
            }else if (dayVal == "wednesday"){
              location="streb";
              activity="flying";
            }else{
              location ="home";
              activity ="homework";
            }
          break;
        case "23:00":
            location="home";
            activity="stretching";
          break;
        default:
            location="mccarren";
            activity="handstanding";
          break;
      }
    });
  });
  $("#selectors").change(function(){
    console.log(location +", " +activity);
    var imgLoc = "images/"+location+".png";
    var imgAct = "images/"+activity+".png";
    $("#locationImg").attr("src",imgLoc);
    $("#activityImg").attr("src",imgAct);
  });
});