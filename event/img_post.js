var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);
var exec = require('child_process').exec;
var fs = require('fs');

//var stream = T.stream('user');

tweetIt();
function tweetIt(){
	var cmd = 'processing-java --sketch="%cd%\\sketch" --run';
	exec(cmd,processing);

	function processing(){
		var filename = 'sketch/output.png'
		var params = { encoding: 'base64'};
		var content = fs.readFileSync(filename, params);
		 T.post('media/upload', { media_data: content }, uploaded);
		function uploaded(err,data,response){
			//this is where we tweet
			var id = data.media_id_string;
			var tweet = {
				status : '#codingrainbow',
				media_ids : [id]
			}
			T.post('statuses/update',tweet,tweeted);
			function tweeted(err, data, response){
				if(err)
					console.log("something went wrong");
				else
					console.log("It worked!");
			}
		}
	}

}
