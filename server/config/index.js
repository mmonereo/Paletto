
const express = require("express");


const logger = require("morgan");


const cookieParser = require("cookie-parser");


const cors = require("cors");





const MONGO_URI = require("../utils/consts");


module.exports = (app) => {
	
	app.set("trust proxy", 1);

	app.use(
		cors({
			credentials: true,
			origin: process.env.ORIGIN || "http://localhost:3000",
		})
	);


	app.use(logger("dev"));

	app.use(express.json());
	app.use(express.urlencoded({ extended: false }));
	app.use(cookieParser());


	require('./session.config')(app);


	app.use((req, res, next) => {
		req.user = req.session.user || null;
		next();
	});
};
