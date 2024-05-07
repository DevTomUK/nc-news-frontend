import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Comments from "./Comments";

function Article() {
    const { article_id } = useParams()
    const [article, setArticle] = useState({})

    useEffect(() => {
        axios
        .get(`https://backend-project-c921.onrender.com/api/articles/${article_id}`)
        .then((response) => {
            const splitDate = response.data.created_at.split("T");
            const formattedDate = splitDate[0]
            response.data.created_at = formattedDate
            setArticle(response.data)
        })
    }, []);



    return (
        <div className="article-page">
            <h3 className="article-page-title">{article.title}</h3>
            <div className="article-page-info">
                <p>Written by {article.author}</p>
                <p>Date: {article.created_at}</p>
            </div>
            <img className="article-page-image" src={article.article_img_url} />
            <p className="article-page-body">{article.body}</p>
            <Comments article_id={article_id}/>
        </div>
    )

}

export default Article