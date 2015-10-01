var weather;

function preload(){
  var url ='http://api.openweathermap.org/data/2.5/forecast?q=newyork,usa&units=imperial';
  weather = loadJSON(url);
}

function setup(){
  console.log(weather);
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw(){
  var w = windowWidth/(parseInt(weather.list.length/2));
  var xPos = 0;
  for(var i=0; i<(parseInt(weather.list.length/2));i++){
    var temp = parseInt(weather.list[i].main.temp);
    var rValue = map(temp, 50,90,0,255);
    var gValue = map(temp, 50,90,0,255);
    var bValue = map(temp, 50,90,255,0);
    noStroke();
    fill(rValue,gValue,bValue);
    rect(xPos,0,w,height);
    fill(255);
    textSize(30);
    text(temp,xPos+w/3,height/2);
    textSize(12);
    var date = weather.list[i].dt_txt.substring(5,11);
    text(date,xPos+w/3,height/2 + 20);
    var time = weather.list[i].dt_txt.substring(11,16);
    text(time,xPos+w/3,height/2 +35);
    xPos += w;
  }
}
