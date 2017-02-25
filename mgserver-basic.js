var http = require("http");

var PORT = 8080;


//generic function for handling request
function handleRequest(request, response){
	response.end("It works on path " + request.url);  //request has a property called url
}

var server = http.createServer(handleRequest); //passing in handREquest as an argument that is going to handle the request for the server.  This is going into the http method called creatServer

server.listen(PORT, function(){  //what port is it listening on. Activating the server.
	console.log("Server is listening on http://localhost:%s",PORT);  //%s  is a string substitution for command line. in this case replace the %s with PORT
})

// handleRequest(myREquest, myResponse);