export const BUTTON_WIDTH = 45;
export const BORDER_WIDTH = 2;
export const INPUT_LEFT_OFFSET = 15;

export const styles = {
	componentContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#222222",
		border: `${BORDER_WIDTH}px solid #61dafb`,
		outline: "none",
		padding: 5
	},
	clearButtonIcon: {
		color: "#61dafb",
		fontSize: "14px"
	},
	clearButtonIconHover: {
		color: "red",
		fontSize: "20px",
		animation: "App-logo-spin infinite 10s linear"
	},
	inputStyles: {
		backgroundColor: "#222222",
		border: "0px",
		color: "white",
		fontSize: "18px",
		lineHeight: "22px",
		fontWeight: "bold",
		outline: "none"
	}
};
