import axios from "axios"
import { useEffect, useState } from "react"
import ArticleCard from "./ArticleCard"
import { useParams, useSearchParams } from "react-router-dom"
import SortOrder from "./SortOrder"


function Articles() {

    const [articlesList, setArticlesList] = useState([])

    const [searchParams, setSearchParams] = useSearchParams();
    const [sortBy, setSortBy] = useState("")
    const [orderBy, setOrderBy] = useState(searchParams.get("order"))

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
      axios
      .get(getRequest)
      .then((response)=>{
        setArticlesList(response.data.articles)
      })
    }, [sortBy, orderBy])

    return (
      <>
      <SortOrder setSearchParams={setSearchParams} setSortBy={setSortBy} setOrderBy={setOrderBy}/>
        <ul className="articles-list">
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

export default Articles