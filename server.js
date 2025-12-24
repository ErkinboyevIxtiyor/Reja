const { log } = require("console");
const express = require("express");
const app = express();
const http = require("http");
//1 Kirish kodlari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//2: Sessions
//3 bssr, Views codes
app.set("views", "views");
app.set("views engine", "ejs");


//4 Routing and build frontent
app.get("/", (req, res) => {
    res.end("Hello world!");
});

app.get("/about", (req, res) => {
    res.end("About page");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, () => {
    console.log(`The server is running seccesfully on port: ${PORT}`);
});