import axios from "axios"
import { useEffect, useState } from "react"
import ArticleCard from "./ArticleCard"

function Articles() {

    const [articlesList, setArticlesList] = useState([])

    useEffect(() => {
        axios
        .get("https://backend-project-c921.onrender.com/api/articles")
        .then((response)=>{
            setArticlesList(response.data.articles)
        })
    }, [])

    return (
        <ul className="articles-list">
          {articlesList.map((article) => {
            return (
                <ArticleCard key={article.article_id} article={article} />
            )
          })
          }
        </ul>

)
}

export default Articles