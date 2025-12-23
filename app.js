const express = require("express");
const path = require("node:path");
const router = require("./routes/router");
require('dotenv').config();

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({extended:true}));


app.use(router);

app.listen(3000, (err) => {
    if (err) console.log(err)
    else console.log('listening on 3000')
});
