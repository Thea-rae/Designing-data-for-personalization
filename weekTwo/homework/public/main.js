	var days;
	var myActivity;
	var myLocation;
	var schedule;
	var mylat;
	var mylng;
	var instaData;
	var imgAct;
	var myheadphones;
	var artist;
	var track;

$(document).ready(function(){

	initInsta();
	initVars();

	$("#selectors").change(function(){
		var timeVal = $('#timeSelector').val();
		var dayVal = $('#daySelector').val();
		myDay(dayVal, timeVal);
		initMap(mylat, mylng);
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
					setActivityImage(myActivity);
					myheadphones = schedule[j].music;
					artist =myheadphones.artist;
					track=myheadphones.track;
					setHistory(artist, track);
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

function setHistory(artist, track){
	if ((artist == "none") && (track =="none")){
		$("#headphones").attr("src", "images/noheadphones.png");
		$("#artist").empty();
		$("#track").empty();
	} else {
		$("#headphones").attr("src", "images/headphones.png");
		$("#artist").text(artist);
		$("#track").text(track);
	}
}

function setActivityImage(activity){
	console.log('set the activity image for ' + activity);

	for(var i=0;i<instaData.length;i++){
		var matchStatus = $.inArray(activity, instaData[i].tags);
		if(matchStatus!=-1){
			imgAct = instaData[i].images.standard_resolution.url;
			$("#activityImg").attr("src", imgAct);
			return;
		}
	}
	imgAct = "images/"+myActivity+".png";
	$("#activityImg").attr("src",imgAct);
}

function initVars(){
	imgAct = "images/handstanding.png";
	$("#activityImg").attr("src",imgAct);
	mylat = 40.703791;
	mylng = -73.93788;
	$("#headphones").attr("src", "images/noheadphones.png");
}

function initInsta(){
	var id = "d76eab0645a34b1598e211af5370dd4d";
	var userID = 1701856516; //my userID 

	$.ajax({
		type: "GET",
		dataType: "jsonp",
		cache: false,
		url: "https://api.instagram.com/v1/users/"+userID+"/media/recent/?client_id=" + id,
		success: function(response) {
			instaData = response.data;
		}
	});
}


function initMap(mlat, mlng) {
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
