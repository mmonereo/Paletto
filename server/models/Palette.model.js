const { Schema, model } = require("mongoose");

const paletteSchema = new Schema(
	{
		name:{
			type: String,
			trim: true,
		},

		colors: [{
			type: String,
			required: true,
			trim: true,
		}],

		count: {
			type: Number,
			required: true,
		},

		mode: {
			type: String,
			trim: true,
			required: true,
		},

		tags: [{
			type: String,
			trim: true,
			maxlength: 4,
		}],

		creator: {
			type: Schema.Types.ObjectId, ref: "User",
			required: true,
		}
	},

	{ timestamps: true }
);

const Palette = model("Palette", paletteSchema);

module.exports = Palette;