import React from "react";
import { View } from "react-native";
import { User } from "../../../types";
import ProfilePicture from "../../ProfilePicture";

export type LeftContainerProps = {
	user: User;
};

const LeftContainer = ({ user }: LeftContainerProps) => (
	<View>
		{/* ProfilePic */}
		<ProfilePicture image={user.profile_image_url} size={40} />
	</View>
);
export default LeftContainer;
