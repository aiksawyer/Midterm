///setting up the bot and packages
console.log('bot starting');

var Twit = require('twit');

var config = require('./config');
var fetch = require("node-fetch");


const api = 'https://gateway.marvel.com/v1/public/comics?format=comic&formatType=comic&noVariants=true&limit=50&ts=1&apikey=*****&hash=3f48596efa744b0886eb035edb7efc42';
fetch(api)
.then(function(response){
	let data = response.json();
	console.log('got here' + data);
	return data;
})
.then(function(data){
	let comicTitle = data["data"]["results"]["title"];
	console.log('got here2' + comicTitle);
	return comicTitle
})
.then(function(comicTitle){
	var gotTitle = comicTitle;
})

///console.log(gotTitle);

function tweetRec(){
	var tweet = {
	status: "Today's recommendation:" + gotTitle;
}

var T = new Twit(config);
//console.log(marvel.comics.title)
T.post('statuses/update', tweet, tweeted);

function tweeted(err, data, response) {
	if(err){
		console.log("Something is wrong")
	}else{
		console.log("working")
	}
}
}

setInterval(tweetRec, 1000*100*10);


//testing search function here
//ended up not using it, but works

// var params = {
// 	q: 'ironman',
// 	count:2
// }

// T.get()

// T.get('search/tweets', params, gotData);

// function gotData(err, data, responce){
// 	var tweets = data.statuses;
// 	for(var i = 0; i < tweets.length; i++){
// 		console.log(tweets[i].text);
// 	}
// }





