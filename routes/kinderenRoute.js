const express = require("express");

const ctrlkinderen = require("../controllers/kinderen");

// maak router object aan
const routes = express.Router();

// maak de verschillende routs aan

routes.get("/", ctrlkinderen.getAll);
routes.put("/", ctrlkinderen.getAll); // getAll op te putten? 

// exporteer het router object
module.exports = routes;
