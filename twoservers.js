var http = require("http");

var PORT = 7000;
var PORT2 = 7500;

//generic function for handling request
function handleRequest(request, response){
	response.end("You bake yummy food!");  //request has a property called url
}

var server = http.createServer(handleRequest); //passing in handREquest as an argument that is going to handle the request for the server.  This is going into the http method called creatServer

server.listen(PORT, function(){  //what port is it listening on. Activating the server.
	console.log("Server is listening on http://localhost:%s",PORT);  //%s  is a string substitution for command line. in this case replace the %s with PORT
})

function handleRequest2(request,response){
	response.end("You talk too much");
}
var server2 = http.createServer(handleRequest2);

server2.listen(PORT2, function(){
	console.log("Server is listening on http://localhost:%s", PORT2);
})