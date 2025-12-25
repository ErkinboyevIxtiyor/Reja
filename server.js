const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs");

let user;
fs.readFile("./database/user.json", "utf8", (err, data) => {
    if(err){
        console.log("Error:", err);
    }else{
        user = JSON.parse(data);
    }
});

//1 Kirish kodlari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//2: Sessions
//3 bssr, Views codes
app.set("views", "views");
app.set("view engine", "ejs");


//4 Routing and build frontent
app.get("/", (req, res) => {
    res.redirect("/author");
    // res.render("index");
});

app.get("/author", (req, res) => {
    res.render("author", { user: user });
});
app.post("/create-item", (req, res) => {
    // console.log(req.body);
    // res.json({message: "success"});
    // res.send("Ma'lumot qo'shildi");
    // res.redirect("/");
    
});

app.get("/about", (req, res) => {
    res.end("About page");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, () => {
    console.log(`The server is running seccesfully on port: ${PORT}`);
});