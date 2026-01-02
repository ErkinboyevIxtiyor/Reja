const express = require("express");
const app = express();
// DB call
const db = require("./server.js").db();
const mongodb = require("mongodb");
//1 Kirish kodlari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2: Sessions
//3 bssr, Views codes
app.set("views", "views");
app.set("view engine", "ejs");

//4 Routing and build frontent
app.get("/", (req, res) => {
  // res.redirect("/author");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) console.log(err);
      else {
        res.render("reja", { items: data });
      }
    });
});

app.post("/create-item", (req, res) => {
  console.log("user entered /create-item");
  let new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    res.json(data.ops[0]);
  });
});

app.post("/delete-item", (req, res) => {
  const id = req.body.id;
  db.collection("plans").deleteOne({ _id: new mongodb.ObjectId(id) }, () => {
    res.json({ state: "success" });
  });
});

module.exports = app;
