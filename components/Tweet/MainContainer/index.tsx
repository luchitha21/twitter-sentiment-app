import { Entypo } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import moment from "moment";
import React from "react";
import { Image, Text, View } from "react-native";
import Autolink from "react-native-autolink";
import { TweetType } from "../../../types";
import Footer from "./Footer";
import styles from "./styles";

export type MainContainerProps = {
	tweet: TweetType;
};

const MainContainer = ({ tweet }: MainContainerProps) => {
	return (
		<View style={styles.container}>
			<View style={styles.tweetHeaderContainer}>
				<Text style={styles.name}>{tweet.user.name}</Text>
				<Text style={styles.username}>@{tweet.user.screen_name}</Text>
				<Entypo name="dot-single" size={13} color="gray" />
				<Text style={styles.createdAt}>{moment(tweet.created_at, "ddd MMM DD HH:mm:ss Z YYYY").fromNow()} </Text>
			</View>

			<View>
				<Autolink
					text={tweet.text}
					hashtag={"twitter"}
					mention={"twitter"}
					onPress={(url, match) => {
						switch (match.getType()) {
							case "url":
								WebBrowser.openBrowserAsync(url);
						}
					}}
				/>
			</View>
			<View>{tweet.entities.media && <Image style={styles.image} source={{ uri: tweet.entities.media[0].media_url }} />}</View>
			<Footer tweet={tweet} />
		</View>
	);
};
export default MainContainer;
