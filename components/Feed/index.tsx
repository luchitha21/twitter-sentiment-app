import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import Tweet from "../Tweet";

const Feed = () => {
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("http://localhost:8080/home")
			.then(response => response.json())
			.then(json => setData(json.tweet))
			.catch(error => console.error(error))
			.finally(() => setLoading(false));
	}, []);

	return (
		<View style={{ width: "100%" }}>
			{isLoading ? (
				<ActivityIndicator />
			) : (
				<FlatList data={data} renderItem={({ item }) => <Tweet tweet={item} />} keyExtractor={({ id }) => id.toString()} />
			)}
		</View>
	);
};

export default Feed;
