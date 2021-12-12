

export const COUNT_SELECT = ['2', '3', '4', '5', '6', '7', '8']
export const MODE_SELECT = ["analogic", "analogic-complement", "complement", "monochrome"]
export const TEXT_COLORS = ["#000000", "#ffffff", "#4D4D4F", "#C3C4C6"]
export const MOCK_SELECT = [
	
	{
		component: "None",
		totalColors: 0,
	},
	
	{
		component: "MockCard",
		totalColors: 3,
		color1: "",
		color2: "",
		color3: "",
		text: true,
		textcolor: "",
		bgcolor: ""
	},

	{
		component: "MockButton",
		totalColors: 2,
		color1: "",
		color2: "",
		text: false,
		bgcolor: ""
	}
]
