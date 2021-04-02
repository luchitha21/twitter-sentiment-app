export type RootStackParamList = {
	Root: undefined;
	Login: undefined;
	NotFound: undefined;
};

export type BottomTabParamList = {
	Profile: undefined;
	Search: undefined;
	Analytics: undefined;
	Notifications: undefined;
};

export type ProfileNavigatorParamList = {
	ProfileScreen: undefined;
	Comments: undefined;
};

export type TabTwoParamList = {
	TabTwoScreen: undefined;
};
// export type UserType = {
// 	id: string;
// 	name: string;
// 	username: string;
// 	image?: string;
// };

// export type TweetType = {
// 	id: string;
// 	createdAt: string;
// 	user: UserType;
// 	content: string;
// 	image?: string;
// 	numberOfComments?: number;
// 	numberOfRetweets?: number;
// 	numberOfLikes?: number;
// 	sentimentScore?: number;
// };

// ----------------------------------------------------------------
export interface TweetType {
	created_at: string;
	id: number;
	id_str: string;
	text: string;
	truncated: boolean;
	entities: Entities;
	extended_entities: ExtendedEntities;
	source: string;
	in_reply_to_status_id?: null;
	in_reply_to_status_id_str?: null;
	in_reply_to_user_id?: null;
	in_reply_to_user_id_str?: null;
	in_reply_to_screen_name?: null;
	user: User;
	geo?: null;
	coordinates?: null;
	place?: null;
	contributors?: null;
	is_quote_status: boolean;
	retweet_count: number;
	favorite_count: number;
	favorited: boolean;
	retweeted: boolean;
	possibly_sensitive: boolean;
	lang: string;
}
export interface Entities {
	hashtags?: null[] | null;
	symbols?: null[] | null;
	user_mentions?: null[] | null;
	urls?: UrlsEntity[] | null;
	media?: MediaEntity[] | null;
}
export interface UrlsEntity {
	url: string;
	expanded_url: string;
	display_url: string;
	indices?: number[] | null;
}
export interface MediaEntity {
	id: number;
	id_str: string;
	indices?: number[] | null;
	media_url: string;
	media_url_https: string;
	url: string;
	display_url: string;
	expanded_url: string;
	type: string;
	sizes: Sizes;
}
export interface Sizes {
	small: SmallOrLargeOrMediumOrThumb;
	large: SmallOrLargeOrMediumOrThumb;
	medium: SmallOrLargeOrMediumOrThumb;
	thumb: SmallOrLargeOrMediumOrThumb;
}
export interface SmallOrLargeOrMediumOrThumb {
	w: number;
	h: number;
	resize: string;
}
export interface ExtendedEntities {
	media?: MediaEntity[] | null;
}
export interface User {
	id: number;
	id_str: string;
	name: string;
	screen_name: string;
	location: string;
	description: string;
	url: string;
	entities: Entities1;
	protected: boolean;
	followers_count: number;
	friends_count: number;
	listed_count: number;
	created_at: string;
	favourites_count: number;
	utc_offset?: null;
	time_zone?: null;
	geo_enabled: boolean;
	verified: boolean;
	statuses_count: number;
	lang?: null;
	contributors_enabled: boolean;
	is_translator: boolean;
	is_translation_enabled: boolean;
	profile_background_color: string;
	profile_background_image_url: string;
	profile_background_image_url_https: string;
	profile_background_tile: boolean;
	profile_image_url: string;
	profile_image_url_https: string;
	profile_banner_url: string;
	profile_link_color: string;
	profile_sidebar_border_color: string;
	profile_sidebar_fill_color: string;
	profile_text_color: string;
	profile_use_background_image: boolean;
	has_extended_profile: boolean;
	default_profile: boolean;
	default_profile_image: boolean;
	following: boolean;
	follow_request_sent: boolean;
	notifications: boolean;
	translator_type: string;
}
export interface Entities1 {
	url: UrlOrDescription;
	description: UrlOrDescription;
}
export interface UrlOrDescription {
	urls?: UrlsEntity[] | null;
}
