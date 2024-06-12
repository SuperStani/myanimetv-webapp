import useData from "../../API/AnimeServices/hooks/useData";
import TelegramUser from "../interfaces/API/TelegramUser";

const useProfileTelegram = (id?: string) => {
    return useData<TelegramUser>('/telegram/getChatSimple/' + id, {}, [id]);
}

export default useProfileTelegram;