var id = "d76eab0645a34b1598e211af5370dd4d";
var userID = 1701856516; //my userID 

$.ajax({
  type: "GET",
  dataType: "jsonp",
  cache: false,
  url: "https://api.instagram.com/v1/users/"+userID+"/media/recent/?client_id=" + id,
  success: function(response) {
    var myFeed = response.data;
    console.log(myFeed);

    for (var i = 0; i<myFeed.length; i++){
      var myPosts = myFeed[i].tags;
      console.log(myPosts);
      var myImg = myFeed[i].link;
      console.log(myImg);
      var 
    }
  }
});


$.ajax({
  type: "GET",
  dataType: "jsonp",
  cache: false,
  url: "https://api.instagram.com/v1/tags/" + myActivity + "/media/recent?client_id=" + id,
  success: function(response) {
    var photoCount = 1;
    var length = response.data != 'undefined' ? response.data.length : 0;
    var limit = photoCount != null && photoCount < length ? photoCount : length;
    console.log(response);
    if(limit > 0) {
      for(var i = 0; i < limit; i++) {
        $('#activityImg').attr('src', response.data[i].images.standard_resolution.url)
        // $('<img>', {
        //   src: response.data[i].images.standard_resolution.url
        // }).appendTo($(".media"));
      }
    } else {
        var imgAct = "images/"+myActivity+".png";
        $("#activityImg").attr("src",imgAct);
    }
  }
});