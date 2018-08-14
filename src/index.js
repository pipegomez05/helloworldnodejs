const express = require('express')
const os = require('os')
const app = express()

app.get('/', function (req, res) {
	res.send('LOOK MA i can do devops too!' + os.hostname())
})

app.get('/healthcheck', function (req, res) {
	res.send('ok')
})

app.listen(3000, function () {
	console.log('Example app listening on port 3000!')
})
