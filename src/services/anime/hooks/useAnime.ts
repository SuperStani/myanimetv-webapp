import DefaultConfig from "../../../config/DefaultConfig";
import { SearchFilter } from "../interfaces/SearchFilter";
import useDataMany from "../../API/AnimeServices/hooks/useDataMany";

const useAnime = <T>(searchFilter: SearchFilter, page: number = 1, limit: number = DefaultConfig.searchItemsLimitPerPage) => {
    const p = {
        params: {
            page: page,
            limit: limit,
            lang: searchFilter?.lang,
            keyword: ''
        }
    };
    let endpoint = '/anime/name/all';
    if (searchFilter?.name) {
        endpoint = "/anime/name";
        p.params['keyword'] = searchFilter.name;
    } else if (searchFilter?.profile) {
        endpoint = "/users/profile/" + searchFilter.profile.userId;
        if (searchFilter.profile?.recap) {
            endpoint += "/unwatchedEpisodes/" + searchFilter.profile.recap;
        } else if (searchFilter.profile?.history === true) {
            endpoint += "/anime/history";
        }
        else if (searchFilter.profile?.preferreds === true) {
            endpoint += "/anime/preferreds";
        }
        else if (searchFilter.profile?.recentViewed === true) {
            endpoint += "/anime/lastWatched";
        }
        else if (searchFilter.profile?.watchlist) {
            endpoint += "/anime/watchlist/" + searchFilter.profile?.watchlist;
        }
    } else if (searchFilter?.getWatchLists) {
        endpoint = "/anime/watchlists";
    }
    else if (searchFilter?.ranking) {
        endpoint = "/anime/ranking/" + searchFilter.ranking;
    }
    return useDataMany<T>(endpoint, p, [page]);
};

export default useAnime;
