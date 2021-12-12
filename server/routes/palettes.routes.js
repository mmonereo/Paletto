const router = require("express").Router();
const Palette = require("../models/Palette.model");

router.post('/save', (req, res) => {

	const {name, colors, count, mode, tags, creator} = req.body;

	Palette.create({name, colors, count, mode, tags, creator})
		.then(palette => {
			console.log(palette);
			res.json(palette);
		})
		.catch(err => {
			console.log(err);
			res.json({err, errMessage: "Error saving palette"});
		});
});

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