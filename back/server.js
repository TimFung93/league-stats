const express = require('express');
const app = express();
const request = require('request');


const PORT = 8080 ;


const url = 'https://na1.api.riotgames.com/lol/static-data/v3/champions?locale=en_US&tags=stats&dataById=false&api_key=RGAPI-adb59fc0-e9f0-431b-880e-30470db84374';
app.get('/', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});


app.get('/', (req,res) => {
	request(url, (err, response, body) => {
		if(err) {
			console.log(err)
		}

		console.log(JSON.parse(body))
		res.send(JSON.parse(body))
		
	});

});





app.listen(PORT, () => {
	console.log('Server started on', PORT)
})
