export interface SearchFilter {
    name?: string | null;
    genres?: string[];
    lang?: string;
    profile?: ProfileFilter,
    maxPages?: number;
}


export interface ProfileFilter {
    userId?: number;
    recap?: string,
    history?: boolean
}