const router = require("express").Router();
const Palette = require("../models/Palette.model");
const User = require("../models/User.model");

router.post('/save', (req, res) => {

	const {name, sourceColor, colors, count, mode, tags, creator} = req.body;

	const formattedTags = tags?.split(' ').filter(tag => tag.length > 0);

	Palette.create({ name, sourceColor, colors, count, mode, tags: formattedTags, creator})
		.then(palette => {
			User.findByIdAndUpdate(creator, { $push: { favorites: palette } }, { new: true })
				.then(user => res.json({palette, user}))
				.catch(err => console.log(err));
		})
		.catch(err => res.status(400).json({errMessage: "Error saving palette"}));
});

router.get('/favorites/:_id', (req, res) => {
	const {_id} = req.params;
	console.log(req.params);
	console.log("User id en ruta traer favoritos:", _id);
	User.findById(_id)
		.populate('favorites')
		.then(user => {
			const {favorites} = user;
			res.json({favorites});
		})
		.catch(err => res.status(400).json({ errMessage: "Error getting favorite Palettes" }));
})

router.post('/favorites/:_id', (req, res) => {
	const { _id } = req.params;
	const {palette} = req.body;
	console.log(req.params);
	console.log("User id en ruta añadir favoritos:", _id);
	User.findByIdAndUpdate(_id, { $push: { favorites: palette } }, { new: true })
		.then(added => {
			res.json({ added });
		})
		.catch(err => res.status(400).json({ errMessage: "Error adding favorite" }));
})

router.get('/browse/latest', (req, res) => {

	Palette.find({})
		.sort({createdAt: -1})
		.limit(15)
		.then(palettes => res.json(palettes))
		.catch(err => res.status(400).json({errMessage: "Error getting latest palettes"}));
});

router.get('/browse/:tag', (req, res) => {

	const {tag} = req.params;

	Palette.find({tags: tag})
		.then(palettes => res.json(palettes))
		.catch(err => res.status(400).json({ errMessage: "Error getting palettes by tag"}));
});


module.exports = router;