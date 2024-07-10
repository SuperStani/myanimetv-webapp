import useData from "../../API/AnimeServices/hooks/useData";
import ProfileBasicStats from "../interfaces/ProfileBasicStats";


const useBasicStats = (userId: any, lang: any) => {
    return useData<ProfileBasicStats>('/users/profile/' + userId + '/stats/basic', { params: { lang } }, userId);

}

export default useBasicStats;