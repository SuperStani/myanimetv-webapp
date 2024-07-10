export interface SearchFilter {
    name?: string | null;
    index?: string | null;
    studio?: string | null;
    category?: string | null;
    year?: string | null;
    episodesRange?: { min?: number | null, max?: number | null } | null;
    related?: number | null;
    similar?: number | null;
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