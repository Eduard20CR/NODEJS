const http = require("http");
const routes = require("./practiceRoutes");

const server = http.createServer(routes);

server.listen(3000);
