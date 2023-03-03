const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);

app.get("/", (req, res) => {
	res.send("<h1>Hellow Orld</h1>");
});

server.listen(3000, () => {
	console.log("server listening at 3000");
});
