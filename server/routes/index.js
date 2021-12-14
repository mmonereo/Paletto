const isLoggedIn = require('../middleware/isLoggedIn');

module.exports = app => {
	app.use("/api/auth", require("./auth.routes"));
	app.use("/api/palettes", isLoggedIn, require("./palettes.routes"));
	app.use("/api/user", isLoggedIn, require("./user.routes"));
	app.use("/api/upload", isLoggedIn, require("./upload.routes"));
}
