// const express = require("express");
// const app = express();
const app = require("express")();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

io.emit("some event", {
	someProperty: "some value",
	otherProperty: "other value",
}); // This will emit the event to all connected sockets

io.on("connection", (socket) => {
	io.emit("new user connected");
	socket.on("chat message", (msg) => {
		console.log("message", msg);
		io.emit("chat message", msg);
	});
	socket.on("disconnect", () => {
		io.emit("user_disconnected");
		console.log("new user disconnected");
	});
});

server.listen(3000, () => {
	console.log("server listening at 3000");
});
