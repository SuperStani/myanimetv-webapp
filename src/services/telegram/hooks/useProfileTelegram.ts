import useData from "../../API/AnimeServices/hooks/useData";
import TelegramUser from "../interfaces/API/TelegramUser";

const useProfileTelegram = (id?: any) => {
    return useData<TelegramUser>('/telegram/getChatSimple/' + id, {}, [id]);
}

export default useProfileTelegram;