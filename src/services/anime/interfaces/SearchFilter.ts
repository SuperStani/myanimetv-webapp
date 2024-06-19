export interface SearchFilter {
    name?: string | null;
    genres?: string[] | null;
    lastAired?: boolean;
    lastUpdated?: boolean
    ongoing?: 'all' | 'bests' | null;
    getWatchLists?: boolean;
    ranking?: 'rating' | 'views' | 'preferreds' | null;
    lang?: string;
    profile?: ProfileFilter,
    maxPages?: number | null;
}


export interface ProfileFilter {
    userId?: any;
    recap?: string;
    history?: boolean;
    preferreds?: boolean;
    recentViewed?: boolean;
    watchlist?: number;
}