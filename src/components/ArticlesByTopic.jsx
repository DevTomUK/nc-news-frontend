import axios from "axios"
import { useEffect, useState } from "react"
import ArticleCard from "./ArticleCard"
import { useParams } from "react-router-dom"

function ArticlesByTopic() {

    const {topic} = useParams()

    const [articlesList, setArticlesList] = useState([])

    useEffect(() => {
        axios
        .get(`https://backend-project-c921.onrender.com/api/articles?topic=${topic}`)
        .then((response)=>{
            setArticlesList(response.data.articles)
        })
    }, [topic])

    return (
        <ul className="articles-list articles-by-topic">
          {articlesList.map((article) => {
            return (
                <ArticleCard key={article.article_id} article={article} />
            )
          })
          }
        </ul>

)
}

export default ArticlesByTopic