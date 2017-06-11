var Twit = require("twit");
var config = require('./config');
var T = new Twit(config);

var stream = T.stream('user');
stream.on('follow', followed);

function followed(event_data){
	console.log("Working on follow_bot");
	var name = event_data.source.name;
	var screenName = event_data.source.screen_name;
	TweetIt("hello"+name+"welcome here"+screen_name);

}

function TweetIt(txt){
	var data_to_put = { 'status': txt }
	T.post('statuses/update', data_to_put, putData)
	function putData(err, data, response){
		if(err)
			console.log(err)
		else
			console.log(data.text);
	}
}
