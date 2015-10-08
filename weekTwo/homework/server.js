
var express = require('express');
var path = require('path');
var app = express();
var request = require('request');

var Rdio = require('rdio')({
	rdio:{
    clientId: "76ytzojebrd5vaitsxn5awzxfa",
    clientSecret: "gCGSAIuwHWNWK7Ui8UKz5A"
  }
});

var rdio = new Rdio();

var data = []; // [{track: TrackName, date: date},{track: TrackName, date: date}] 

app.use(express.static("public"));


app.get('/',function(req, res){

	// check to see if we already have a token
	// TO DO

	// if not, redirect the user to authenticate with rdio
	res.redirect('https://www.rdio.com/oauth2/authorize?response_type=code&client_id=76ytzojebrd5vaitsxn5awzxfa&redirect_uri=http://localhost:8080/authsuccess');

});


app.get('/authsuccess', function(req, res) {
	console.log('auth success!!!!!');
	console.log(req.query.code);

	rdio.getAccessToken({
		code: req.query.code,
		redirect: 'http://localhost:8080/authsuccess'
	}, function(err) {
		if (err) {
			console.log('error authenticating');
			return;
		} else {
			console.log('success authenticating!!!!');

			rdio.request({
					method: 'currentUser'
				}, function(err, response) {
					if (err) {
						console.log('error getting user: ' + err);
					} else {
						console.log('got current user!');

						//console.log(response);

								// rdio.request({
								// 	method: 'getHeavyRotation',
								// 	user: response.result.key
								// }, function(err, res1){
								// 	var artists = [];
								// 	for (var i = 0; i< res1.result.length; i++){
								// 		artists.push(res1.result[i].artist);
								// 		console.log(artists);
								// 	}
								// })

								rdio.request({
									method: 'getRecentStationsHistoryForUser',
									user: response.result.key}, 
									function(err, response3){
										console.log(response3)
									})

							// 	rdio.request({
							// 		method: 'getActivityStream',
							// 		scope: 'user',
							// 		count: 30,
							// 		types: [1],
							// 		user: response.result.key}, function(err, res2){
							// 			console.log(res2.result.updates.length)
							// 			res2.result.updates.forEach(function(update){
							// 				console.log('NEW UPDATE!!!!!!!!');
							// 				console.log(update)
							// 				var obj = {
							// 					name: update.track.name,
							// 					artist: update.track.artist,
							// 					date: update.date
							// 				}
							// 				data.push(obj);
							// 			})

							// 			console.log(data);
							// })


					}
			});


		}


	});


	res.sendFile( __dirname + '/public/bob.html');

});


var port = process.env.PORT || 8080;

var server = app.listen(port, function(){
    console.log('Listening on port:', port);
});

