import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Articles() {

    const [articlesList, setArticlesList] = useState([])

    useEffect(() => {
        axios
        .get("https://backend-project-c921.onrender.com/api/articles")
        .then((response)=>{
            setArticlesList(response.data.articles)
        })
    }, [])

    console.log(articlesList)

    return (
        <ul className="articles-list">
          {articlesList.map((article) => {
            return (
                <Link to={`/articles/${article.article_id}`}>
                    <li key={article.article_id} className="article-card">
                        <img className="article-card-image" src={article.article_img_url} />
                        <div className="vertical-flex">
                            <div className="article-card-right">
                                <div className="article-card-text">
                                    <h3>{article.title}</h3>
                                </div>

                                <div className="article-card-info">
                                    <p>Topic: {article.topic}</p>
                                    <p>Comments: {article.comment_count}</p>
                                    <p>Votes: {article.votes}</p>
                                </div>
                            </div>
                        </div>
                    </li>
                </Link>
            )
            
          })}
          </ul>

)
}

export default Articles