import apiClient from "../../API/AnimeServices/apiClient"

const deleteCommentById = async (id: number, webapp_data: any) => {
    return await apiClient.post('/episodes/comment/' + id + '/delete', { webapp_data })
}

export default deleteCommentById;