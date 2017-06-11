var Twit = require("twit");
var config = require('./config');
var T = new Twit(config);
var params = { q: 'banana since:2011-07-11', count: 1};

T.get('search/tweets', params , getData);
 
function getData(err, data, response) {
  var tweets = data.statuses;
  for(var i=0;i<tweets.length;tweets++)
  	console.log(tweets[i].text);
}
