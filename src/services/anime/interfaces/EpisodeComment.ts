import User from "../../profile/interfaces/User";

export interface EpisodeComment {
    id: number;
    animeId: number;
    userId: number;
    episodeNumber: number;
    lang: string;
    text: string;
    datetime: string;
    user: User;
}
