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
			//CR maxlength
		}],

		tags: [{
			type: String,
			trim: true,
		}],

		creator: {
			type: Schema.Types.ObjectId, ref: "User",
		}
	},

	{ timestamps: true }
);

const Palette = model("Palette", paletteSchema);

module.exports = User;