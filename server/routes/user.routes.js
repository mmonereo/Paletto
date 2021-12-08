const router = require("express").Router();
const User = require("../models/User.model");

router.put('/:id/edit-profile',  (req, res) => {
	const {username, _id} = req.body;

	User.findByIdAndUpdate(_id, { username}, { new: true })
		.then(userEdit => {
			console.log("user profile updated", userEdit);
			res.json(userEdit);
		})
		.catch(err => {
			console.log(err);
			res.json({ err, errMessage: "Error editing user profile" }); 
		});
})

module.exports = router;