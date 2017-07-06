const express = require('express');
const app = express();
const request = require('request');


const PORT = 8080 ;


const url = 'https://na1.api.riotgames.com/lol/static-data/v3/champions?locale=en_US&tags=stats&dataById=false&api_key=RGAPI-50d9c29a-f736-4295-b0e9-eaeaa2af7922'
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

})



app.listen(PORT, () => {
	console.log('Server started on', PORT)
})
