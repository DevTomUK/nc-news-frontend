import axios from "axios";

function getCommentsById(id) {
    axios
    .get(`https://backend-project-c921.onrender.com/api/articles/${id}/comments`)
    .then((response) => {
        return response.data.comments
    })
}

export default getCommentsById