const express = require("express");
const routes = express.Router();
const BookController = require("../controllers/bookController");

routes.post("/book", BookController.create);

module.exports = routes;
