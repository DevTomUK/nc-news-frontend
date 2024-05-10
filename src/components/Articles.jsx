import axios from "axios"
import { useContext, useEffect, useState } from "react"
import ArticleCard from "./ArticleCard"
import { useSearchParams } from "react-router-dom"
import SortOrder from "./SortOrder"
import UserContext from "../contexts/UserContext"


function Articles() {

    const { user } = useContext(UserContext)
    const [articlesList, setArticlesList] = useState([])

    const [searchParams, setSearchParams] = useSearchParams();
    const [sortBy, setSortBy] = useState("")
    const [orderBy, setOrderBy] = useState(searchParams.get("order"))
    const [isLoading, setIsLoading] = useState(false)

    // sort by possibilities: "created_at", "title", "topic", "author", "votes", "comment_count", "body"
    // order by: DESC, ASC

    useEffect(() => {
      let getRequest = "https://backend-project-c921.onrender.com/api/articles/"
      if (sortBy) {
        getRequest += `?sort_by=${sortBy}`
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
        setArticlesList(response.data.articles)
      })
      .catch(()=>{
        setIsLoading(false)
      })
    }, [sortBy, orderBy])

    return (
      <main>
      <SortOrder setSearchParams={setSearchParams} setSortBy={setSortBy} setOrderBy={setOrderBy}/>
      <hr />
      {isLoading && <h2>Articles Loading...</h2>}
        <ul className="articles-list">
          {articlesList.map((article) => {
            return (         
                <ArticleCard key={article.article_id} article={article} />
            )
          })
          }
        </ul>
</main>
)
}

export default Articles