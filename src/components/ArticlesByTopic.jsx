import axios from "axios"
import { useEffect, useState } from "react"
import ArticleCard from "./ArticleCard"
import { useParams, useSearchParams } from "react-router-dom"
import SortOrder from "./SortOrder"
import NotFoundTopic from "./NotFoundTopic"

function ArticlesByTopic() {

    const {topic} = useParams()
    const [articlesList, setArticlesList] = useState([])
    const [noTopicsFound, setNoTopicsFound] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams();
    const [sortBy, setSortBy] = useState("")
    const [orderBy, setOrderBy] = useState(searchParams.get("order"))
    const [isLoading, setIsLoading] = useState(false)

    // sort by possibilities: "created_at", "title", "topic", "author", "votes", "comment_count", "body"
    // order by: DESC, ASC

    useEffect(() => {
      let getRequest = `https://backend-project-c921.onrender.com/api/articles?topic=${topic}`
      if (sortBy) {
        getRequest += `&sort_by=${sortBy}`
        if (orderBy) {
          getRequest += `&order=${orderBy}`
        } else {
          getRequest += '&order=DESC'
        }
      }
      setIsLoading(true)
      axios
      .get(getRequest)
      .then((response)=>{
        setIsLoading(false)
        setNoTopicsFound(false)
        setArticlesList(response.data.articles)
      })
      .catch((error)=>{
        setNoTopicsFound(true)
        setIsLoading(false)
    })
    }, [sortBy, orderBy, topic])

    if (noTopicsFound) {
      return <NotFoundTopic />
  }

    return (
      <>
      <SortOrder setSearchParams={setSearchParams} setSortBy={setSortBy} setOrderBy={setOrderBy}/>
      <hr />
      {isLoading && <h2>Articles Loading...</h2>}
        <ul className="articles-list articles-by-topic">
          {articlesList.map((article) => {
            return (
                <ArticleCard key={article.article_id} article={article} />
            )
          })
          }
        </ul>
</>
)
}

export default ArticlesByTopic