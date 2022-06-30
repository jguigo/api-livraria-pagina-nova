const express = require("express");
const routes = require("./routes");
const db = require("./database");
const upload = require("./config/upload");

const app = express();

db.hasConection();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(upload.any());
app.use(express.static('src/public/'));

app.use(routes);

const port = process.env.PORT || 4500
app.listen(port, () => console.log(`Serve on at Port ${port}!`));
