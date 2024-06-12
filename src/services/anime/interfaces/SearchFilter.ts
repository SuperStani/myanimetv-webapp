export interface SearchFilter {
	name?: string | null;
	genres?: string[];
	getWatchLists?: boolean;
	ranking?: "rating" | "views" | "preferreds" | null;
	lang?: string;
	profile?: ProfileFilter;
	maxPages?: number;
}

export interface ProfileFilter {
	userId?: string;
	recap?: string;
	history?: boolean;
	preferreds?: boolean;
	recentViewed?: boolean;
	watchlist?: number;
}
