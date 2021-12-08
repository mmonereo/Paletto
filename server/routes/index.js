module.exports = app => {
	app.use("/api/auth", require("./auth.routes"));
	app.use("/api/palettes", require("./palettes.routes"));
	app.use("/api/user", require("./user.routes"));
	app.use("/api/upload", require("./upload.routes"));
}
