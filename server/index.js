const http = require('http');
const port = 3000;

const chatRooms = [{
    name: "Ana Jacobson",
    time: "5 minutes"
},{
    name: "Michel Shelton",
    time: "3 minutes"
},{
    name: "Todd Fisher",
    time: "5 minutes"
}];

const requestHandler = (request, response) => {
  console.log('request url', request.url);

  if (request.url.endsWith('/chat-rooms')) {
    response.end(JSON.stringify({ body: chatRooms }));
  }

  response.end();
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on ${port}`);
});
