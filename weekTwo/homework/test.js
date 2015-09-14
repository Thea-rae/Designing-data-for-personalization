$.getJSON("theasLife.JSON", parselife);

function parselife(data){
  var life = data.theasLife;
  for (var i = 0; i<life.length; i++){
    var day = life[i].days;
    var p = "<li>" + day + "</li>";
    $ ("#dayTime").append(p);
  }
  //console.log(data);
}
