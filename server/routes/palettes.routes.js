const router = require("express").Router();
const Palette = require("../models/Palette.model");
const User = require("../models/User.model");

router.post('/save', (req, res) => {

	const {name, colors, count, mode, tags, creator} = req.body;

	const formattedTags = tags.split(' ');

	Palette.create({name, colors, count, mode, tags: formattedTags, creator})
		.then(palette => {
			console.log(palette);
			User.findByIdAndUpdate(creator, { $push: { favorites: palette } }, { new: true })
				.then(user => {
					res.json({palette, user});
				})
				.catch(err => console.log(err));
		})
		.catch(err => {
			console.log(err);
			res.json({err, errMessage: "Error saving palette"});
		});
});

router.get('/favorites/:_id', (req, res) => {
	const {_id} = req.params;
	console.log(req.params);
	console.log("User id en ruta favoritos:", _id);
	User.findById(_id)
		.populate('favorites')
		.then(user => {
			const {favorites} = user;
			console.log("paletas favoritas", favorites);
			res.json({favorites});
		})
		.catch(err => console.log(err));
})

router.get('/browse/latest', (req, res) => {

	Palette.find({})
		.sort({createdAt: -1})
		.limit(10)
		.then(palettes => res.json(palettes))
		.catch(err => res.json({err, errMessage: "Error getting latest palettes"}));
});

router.get('/browse/:tag', (req, res) => {

	const {tag} = req.params;

	Palette.find({tags: tag})
		.then(palettes => res.json(palettes))
		.catch(err => res.json({err, errMessage: "Error getting palettes by tag"}));
});


module.exports = router;