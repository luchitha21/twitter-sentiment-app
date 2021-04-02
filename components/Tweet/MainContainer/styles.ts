import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	tweetHeaderContainer: {
		flexDirection: "row",
		paddingBottom: 6,
		alignItems: "center",
		flexWrap: "wrap",
		// backgroundColor: 'yellow',
	},
	name: {
		fontWeight: "bold",
	},
	username: {
		marginHorizontal: 8,
		marginRight: 2,
		color: "#707070",
	},

	createdAt: {
		marginRight: 1,
		color: "#707070",
	},
	tweetContent: {
		lineHeight: 17.5,
	},
	image: {
		width: "100%",
		height: 200,
		borderRadius: 16,
		marginVertical: 10,
		overflow: "hidden",
	},
	container: {
		flex: 1,
		marginHorizontal: 10,
	},
});

export default styles;
