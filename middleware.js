
var middleware = {
	requireAuthentification: function(req, res, next){
		console.log('private route hit!');
		next();
	},
	logger: function(req, res, next){
		console.log('Request ' + req.method + ' ' + req.originalUrl +' @time: '+ Date().toString() );
		next();
	}
};

module.exports = middleware;

