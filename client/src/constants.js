

export const COUNT_SELECT = ['2', '3', '4', '5', '6', '7', '8']
export const MODE_SELECT = ["analogic", "analogic-complement", "complement", "monochrome"]
export const TEXT_COLORS = ["#000000", "#4D4D4F", "#C3C4C6", "#F7F7F7"]
export const BG_COLORS = ["#222222", "#C3C4C6"]
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
		component: "MockCardGradient",
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
		text: true,
		textcolor: "",
		bgcolor: ""
	},

	{
		component: "MockBootstrapButton",
		totalColors: 1,
		color1: "",
		text: true,
		textcolor: "",
		bgcolor: ""
	}
]

export const TOAST_OPTIONS = {
	
		className: '',
		duration: 4000,
		position: "bottom-center",
		incon: '',

		style: {

			width: "200px",
			padding: "8px",
			textAlign: "center",
			color: "#f7f7f7",
			border: "1px solid #f7f7f7",
			background: "#434240",
			transition: "all 0.5s ease-out",
			iconTheme: "none",
			borderRadius: "0px"
		},
	

	error: {
		duration: 4000,
		position: "top-center",
	},

	success: {
		duration: 3000,
		position: "top-center",
	}

}

