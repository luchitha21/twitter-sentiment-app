import React from "react";
import { View } from "react-native";
import { TweetType } from "../../types";
import LeftContainer from "./LeftContainer";
import MainContainer from "./MainContainer";
import styles from "./styles";

export type TweetProps = {
	tweet: TweetType;
};

const Tweet = ({ tweet }: TweetProps) => (
	<View style={styles.container}>
		{/* LeftViewContainer */}
		<LeftContainer user={tweet.user} />
		{/* MainViewContainer */}
		<MainContainer tweet={tweet} />
	</View>
);

export default Tweet;
