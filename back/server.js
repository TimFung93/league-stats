const express = require('express');
const app = express();
const request = require('request');


const PORT = 8080 ;
const API = 'RGAPI-aea2207a-e6db-41f2-8622-9a528e0c0caf';


app.get('/', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});





app.get('/', (req,res) => {
	const url = 'https://na1.api.riotgames.com/lol/static-data/v3/champions?locale=en_US&tags=stats&dataById=false&api_key=' + API;
	request(url, (err, response, body) => {
		if(err) {
			console.log(err)
		}

		res.send(JSON.parse(body))
		
	});

});

app.get('/:id', (req,res) => {
	let id;
	const url = 'https://na1.api.riotgames.com/lol/platform/v3/champions/'+ id + '?api_key=' + API;
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
