$.getJSON("water.JSON", parsetravel);

function parsetravel(data){
  var food = data.waterforfood;
  for (var i = 0; i<food.length; i++){
    var name = food[i].name;
    var p = "<li>" + name  + "</li>";
    $ ("#things").append(p);
  }
  console.log(data);
}
