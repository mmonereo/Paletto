
module.exports = (req, res, next) => {

	if (!req.session.currentUser) {
		return res
			.status(403)
			.json({ errorMessage: "You must be logged in to see this page" });
	}
	req.currentUser = req.session.currentUser;
	next();
};
