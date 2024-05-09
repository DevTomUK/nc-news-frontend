import axios from "axios";

export function postNewComment(article_id, commentData) {
    return axios.post(`https://backend-project-c921.onrender.com/api/articles/${article_id}/comments`, commentData)
}

export function getCommentsByArticleId(article_id) {
    return axios.get(`https://backend-project-c921.onrender.com/api/articles/${article_id}/comments`)
}

export function deleteComment(id) {
    return axios.delete(`https://backend-project-c921.onrender.com/api/comments/${id}`)
}

export function getTopicsList() {
    return axios.get('https://backend-project-c921.onrender.com/api/topics')
}