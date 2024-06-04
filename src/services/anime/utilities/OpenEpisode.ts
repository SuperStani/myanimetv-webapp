import apiClient from "../../API/Bot/apiClient";
const openEpisode = async (id: number, episode: number, callback: () => void, userId?: number, data?: any) => {

    const endpoint = `?webapp=1&callback_data=Player:play|${id}|${episode}|-1&to_user=${userId}&${data}`;
    apiClient.get(endpoint).then(() => { callback(); }).catch(() => { callback(); })
}

export default openEpisode;