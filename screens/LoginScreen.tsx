import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as WebBrowser from "expo-web-browser";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "../components/Themed";
import Colors from "../constants/Colors";

const LoginScreen = () => {
	const navigation = useNavigation();

	const onPress = () => {
		navigation.navigate("Root");
	};
	function handleHelpPress() {
		WebBrowser.openBrowserAsync("https://www.youtube.com/");
	}

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity activeOpacity={0.3} onPress={onPress}>
					<Ionicons name="md-close" size={33} color="black" />
				</TouchableOpacity>
			</View>

			<TouchableOpacity style={styles.login} activeOpacity={0.3} onPress={handleHelpPress}>
				<Text style={styles.loginText}>Login</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	login: {
		backgroundColor: Colors.light.tint,
		borderRadius: 20,
	},
	loginText: {
		padding: 45,
		paddingVertical: 12,
		fontWeight: "bold",
		color: "white",
	},
	header: {
		left: "40%",
		bottom: "38%",
	},
});

export default LoginScreen;
