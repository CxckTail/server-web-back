const http = require('http');

const adresse = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Typre': 'text/plain'})
    response.end("Salut\n");
})

server.listen(port, adresse, ()=> {console.log("Serveur lancé !")})