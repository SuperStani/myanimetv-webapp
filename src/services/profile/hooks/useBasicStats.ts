import useData from "../../API/AnimeServices/hooks/useData";
import ProfileBasicStats from "../interfaces/ProfileBasicStats";


const useBasicStats = (userId: string) => {
    return useData<ProfileBasicStats>('/users/profile/' + userId + '/stats/basic', {}, [userId]);

}

export default useBasicStats;