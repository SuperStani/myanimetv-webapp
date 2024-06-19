export interface Anime {
    id: number;
    name: string;
    category: string;
    season: number;
    poster: string;
    average?: number;
    viewCount?: number;
    preferredsCount?: number;
    episodeNumber?: number;
}