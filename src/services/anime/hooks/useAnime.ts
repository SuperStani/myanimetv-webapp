import DefaultConfig from "../../../config/DefaultConfig";
import { SearchFilter } from "../interfaces/SearchFilter";
import useDataMany from "../../API/AnimeServices/hooks/useDataMany";

const useAnime = <T>({
    name,

    ongoing,
    lastAired,
    lastUpdated,
    getWatchLists,
    ranking,
    lang,
    profile
}: SearchFilter, page: number = 1, limit: number = DefaultConfig.searchItemsLimitPerPage) => {

    const params: Record<string, any> = {
        page,
        limit,
        lang,
    };

    let endpoint = '/anime/name/all';

    if (name) {
        endpoint = "/anime/name";
        params['keyword'] = name;
    } else if (profile) {
        endpoint = `/users/profile/${profile.userId}`;
        if (profile.recap) {
            endpoint += `/unwatchedEpisodes/${profile.recap}`;
        } else if (profile.history) {
            endpoint += "/anime/history";
        } else if (profile.preferreds) {
            endpoint += "/anime/preferreds";
        } else if (profile.recentViewed) {
            endpoint += "/anime/lastWatched";
        } else if (profile.watchlist) {
            endpoint += `/anime/watchlist/${profile.watchlist}`;
        }
    } else if (getWatchLists) {
        endpoint = "/anime/watchlists";
    } else if (ranking) {
        endpoint = `/anime/ranking/${ranking}`;
    } else if (ongoing) {
        endpoint = `anime/ongoing/${ongoing}`;
    } else if (lastAired) {
        endpoint = `anime/lasts/uploaded`;
    }
    else if (lastUpdated) {
        endpoint = `anime/lasts/updated`;
    }

    return useDataMany<T>(endpoint, { params }, [page]);
};

export default useAnime;