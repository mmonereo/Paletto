module.exports = app => {
	app.use("/auth", require("./auth.routes"));
	app.use("/palettes", require("./palettes.routes"));
}
