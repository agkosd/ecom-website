// const http = require('http');
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const hbs = require("express-handlebars");

//handlebar
// app.engine(
//   "hbs",
//   hbs({
//     layoutsDir: "views/layouts",
//     defaultLayout: "main-layout.hbs",
//     extname: "hbs",
//   })
// );
app.set("view engine", "ejs");
app.set("views", "views");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const invalidRoute = require("./routes/invalid");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);
app.use(invalidRoute);

//does both the things for us
app.listen(8000);
// const server = http.createServer(app);
// server.listen(8080);
