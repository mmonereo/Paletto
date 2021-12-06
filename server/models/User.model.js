const { Schema, model } = require("mongoose");

const userSchema = new Schema(
	{
		username: {
			type: String,
			trim: true,
			required: true,
		},

		password: {
			type: String,
			required: true,
		},

		profileImg: {
			type: String,
		},

		email: {
			type: String,
			lowercase: true,
			//required: [true, "email can't be blank"],
			match: [/\S+@\S+\.\S+/, 'email is invalid'],
			unique: true
		},

		favorites: [{
			type: Schema.Types.ObjectId, ref: "Palette"
		}],
	},

	{ timestamps: true }
);

const User = model("User", userSchema);

module.exports = User;
