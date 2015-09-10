$.getJSON("internationalTravels.JSON", parsetravel);

function parsetravel(data){
  var places = data.internationalTravels;
  for (var i = 0; i<places.length; i++){
    var year = places[i].year;
    var locationTraveled = places[i].locationTraveled;
    var p = "<li>" + locationTraveled + ", " + year + "</li>";
    $ ("#things").append(p);
  }
  //console.log(data);
}
