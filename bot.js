///setting up the bot and packages
console.log('bot starting');

var Twit = require('twit');

var config = require('./config');

//console.log(config);


// marvel = new Marvel({ publicKey: "4f804381e438abd7d337fe90bec41e4a", privateKey: "4cf78151948baaac6f5f8a395d4f684bed49b27c"});

// marvel.comics
// 	.limit(3)
// 	.get(function(err, res){
// 		if(err){throw err}
// 			res.forEach(function(ttl){
// 			//console.log(ttl.title);
// 			var rec = ttl.title;
// 			console.log(rec);
// 			return this.title; 
			
// 		})
		
// 		var d = res[1].title;
// 		console.log(d); ////GOT A TITLE OUT!
// 		// return this.next + this.send;
// 	})

//b = marvel.comics;
// function (val) {
//         this.param[k] = val
//         return this
//       }	 

//console.log(b);

// var recc = marvel.comics.res;
// console.log("got here " + recc);

var Marvel = require('marvel');

marvel = new Marvel({ publicKey: "4f804381e438abd7d337fe90bec41e4a", privateKey: "4cf78151948baaac6f5f8a395d4f684bed49b27c"});




marvel.comics
.limit(3)
.get(function(err, res){
	if(err){throw err}
		res.forEach(function(ttl){
			//console.log(ttl.title);
			var rec = ttl.title;
			console.log(rec);
			return this.title; 
			
		})

	var d = res[1].title;

	console.log(d); ////GOT A TITLE OUT!
	
	return this.send;
		
	})

console.log(marvel.comics);

var tweet = {
	status: marvel.comics
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




//var recommend = "Today's reconmmendation: " + rec;
//console.log("getting rec " + recommend);
	

///this is a function that sets up how often the bot will tweet
//will change to once a day later
//setInterval(tweetRec, 1000*100*10);

// function tweetRec(){

// 	var r = Math.floor(Math.random()*100);

// 	var tweet = {
// 		status: recc
// 	}

// 	T.post('statuses/update', tweet, tweeted);

// 	function tweeted(err, data, response) {
// 		if(err){
// 			console.log("Something is wrong")
// 		}else{
// 			console.log("working")
// 		}
// 	}
// };


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


///tested the post function here, works well





////installed an API wrapper for Marvel API by sawng (https://github.com/swang/marvel)



