$.getJSON("internationalTravels.JSON", parseTravels);

function parseTravels(data){
  var places = data.internationalTravels;
  for (var i = 0; i<places.length; i++){
    var year = places[i].year;
    var p = "<li>" + year + "</li>";
    $ ("#travels").append(p);
  }
  //console.log(data);
}
