
import apiClient from "../../API/AnimeServices/apiClient";
const saveNewComment = async (userId: number, animeId: number, episodeNumber: number, text: string, lang: string, webAppData: any) => {
    const data = {
        webapp_data: webAppData, comment: {
            userId,
            animeId,
            episodeNumber,
            text,
            lang
        }
    }
    return await apiClient.put('/episodes/comment/save', data);
}

export default saveNewComment;