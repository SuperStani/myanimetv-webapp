import apiClient from "../../API/Bot/apiClient";
const openAnime = async (id: number, callback: () => void, userId?: number, data?: any) => {
    const endpoint = `?webapp=1&callback_data=Anime:view|${id}|-1&to_user=${userId}&${data}`;
    return apiClient.get(endpoint).then(async () => {
        callback()
    }).catch(async () => {
        callback()
    });
}

export default openAnime;