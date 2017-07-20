const express = require('express');
const app = express();
const request = require('request');
const fs = require('fs');
const config = require('./config')

const PORT = 8080 ;
 
let myKey = config.MY_KEY;

app.get('/', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});






app.get('/', (req,res) => {
	const url = 'https://na1.api.riotgames.com/lol/static-data/v3/champions?locale=en_US&tags=stats&dataById=false&api_key=' + myKey;
	request(url, (err, response, body) => {
		if(err) {
			console.log(err)
		}

		res.send(JSON.parse(body))
		
	});

});



app.get('/champion/:id', (req,res) => {
	let id;
	const url = 'https://na1.api.riotgames.com/lol/platform/v3/champions/'+ id + '?api_key=' + myKey;
	console.log(req)
	request(url, (err,response, body) => {
		if (err) {
			console.log(err)
		}

		res.send(body)
	})
});





app.listen(PORT, () => {
	console.log('Server started on', PORT)
});
