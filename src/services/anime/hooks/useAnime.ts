import DefaultConfig from "../../../config/DefaultConfig";
import { SearchFilter } from "../interfaces/SearchFilter";
import useData from "./useData";

const useAnime = <T>(page: number = 1, searchFilter: SearchFilter) => {
    let p: any = {
        params: {
            page: page,
            limit: DefaultConfig.searchItemsLimitPerPage,
            lang: searchFilter?.lang
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
        }
        if (searchFilter.profile?.history === true) {
            endpoint += "/anime/history";
        }
    }
    return useData<T>(endpoint, p, [page]);
};

export default useAnime;
