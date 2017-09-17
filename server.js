var express = require('express');
var app = express();
var PORT = 3000;

var middleware ={
	requireAuthentification: function(req, res, next){
		console.log('private route hit!');
		next();
	},
	logger: function(req, res, next){
		console.log('Request ' + req.method + ' ' + req.originalUrl +' @time: '+ Date().toString() );
		next();
	}
}
app.use(middleware.logger);
//app.use(middleware.requireAuthentification);

app.get('/about', middleware.requireAuthentification, function(req, res){
	res.send('About us tabarnak');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function (){
	console.log('express server started on port ' + PORT + '! Oh yeah!!! ')
});
