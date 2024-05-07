import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Article() {
    const { article_id } = useParams()
    const [article, setArticle] = useState({})
    const prevArticle = article_id - 1

    console.log(article)

    useEffect(() => {
        axios
        .get(`https://backend-project-c921.onrender.com/api/articles/${article_id}`)
        .then((response) => {
            setArticle(response.data)
        })
    }, []);

    function setDateFormat(originalDate) {
        const splitDate = originalDate.split("T");
        const formattedDate = splitDate[0]
        return formattedDate
    }

    return (
        <div className="article-page">
            <h3 className="article-page-title">{article.title}</h3>
            <div className="article-page-info">
                <p>Written by {article.author}</p>
                <p>Date: {article.created_at}</p>
            </div>
            <img className="article-page-image" src={article.article_img_url} />
            <p className="article-page-body">{article.body}</p>
        </div>
    )

}

export default Article