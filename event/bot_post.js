var Twit = require("twit");
var config = require('./config');
var T = new Twit(config);

setInterval(TweetIt, 1000*10)

function TweetIt(){
	var data_to_put = { 'status' : 'The'+Math.floor(Math.random())+'th random post' }

	T.post('statuses/update', data_to_put, putData)

	function putData(err, data, response){
		if(err)
			console.log(err)
		else
			console.log(data.text);
	}

}
 
function gotData(err, data, response) {
  var tweets = data.statuses;
  for(var i=0;i<tweets.length;tweets++)
  	console.log(tweets[i].text);
}
