const { Schema, model } = require("mongoose");

const paletteSchema = new Schema(
	{
		name:{
			type: String,
			trim: true,
			required: true,
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

		tags: {

			type: [{
				type: String,
				trim: true,
			}],

			validate: [arrayLimit, '{PATH} exceeds the limit of {MAX} items'],
		},

		creator: {
			type: Schema.Types.ObjectId, ref: "User",
			required: true,
		}
	},

	{ timestamps: true }
);

function arrayLimit(val) {
	return val.length <= 4;
}

const Palette = model("Palette", paletteSchema);

module.exports = Palette;