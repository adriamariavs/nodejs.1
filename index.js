var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});

  var dataAtual = new Date();
  var dataFormada = dataAtual.toDateString();

  res.end('Adria Maria Vieira dos Santos!/nData Atual ' + dataFormada);
}).listen(8009);
