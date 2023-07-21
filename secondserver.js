var http=require('http');
var imp=require('./secondmodule');
http.createServer(function(req,res){
res.writeHead(200,{'Content-Type':'text/html'});
res.write(imp.myfun());

//res.end('hello world');
}).listen(6006);

