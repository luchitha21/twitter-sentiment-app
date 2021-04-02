import { FontAwesome5, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { TweetType } from "../../../../types";
import styles from "./styles";

export type FooterContainerProps = {
	tweet: TweetType;
};

const Footer = ({ tweet }: FooterContainerProps) => {
	const navigation = useNavigation();

	const onPress = () => {
		navigation.navigate("Comments");
	};
	return (
		<View style={styles.container}>
			<TouchableOpacity activeOpacity={0.3} onPress={onPress}>
				<View style={styles.comment}>
					<Ionicons name="chatbubble-outline" size={19} color="grey" />
					<Text style={styles.footerNumber}>69</Text>
				</View>
			</TouchableOpacity>

			<View style={styles.footerIcons}>
				<MaterialCommunityIcons name="twitter-retweet" size={25} color="grey" />
				<Text style={styles.footerNumber}>{tweet.retweet_count}</Text>
			</View>
			<View style={styles.footerIcons}>
				<FontAwesome5 name="heart" size={17} color="grey" />
				<Text style={styles.footerNumber}>{tweet.favorite_count}</Text>
			</View>
			<View style={styles.footerIcons}>
				<Text style={styles.sentimentScore}>+4.20</Text>
			</View>
		</View>
	);
};

export default Footer;
