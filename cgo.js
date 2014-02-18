var fs = require('fs'),
path = require('path'),
static = require('node-static'),
sanitize = require('validator').sanitize,

	// (err) throw err;

	app = require('http').createServer(handler);
	
	app.listen(3000);

	var file = new static.Server(path.join(__dirname,'/'));

	function handler(req, res) {
		file.serve(req, res);
	}

