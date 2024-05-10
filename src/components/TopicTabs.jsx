import { Link, useParams } from "react-router-dom"
import { getTopicsList } from "../api/apiFunctions"
import { useEffect } from "react"

function TopicTabs({topicsList, setTopicsList}) {
    
    const { topic } = useParams()

    useEffect(()=>{
        getTopicsList()
        .then((response)=>{
            setTopicsList(response.data.topics)
        })
    }, [])

    return (
        <nav>
        <div className="spacer"></div>
        <ul className="topics-tabs-div">
            {topicsList.map((topicItem)=>{
                return (
                <li key={topicItem.slug} className={topic === topicItem.slug ? "topics-tab selected-tab" : "topics-tab"}>
                    <Link to={`/topics/${topicItem.slug}`}>
                        <h2>{topicItem.slug}</h2>
                    </Link>
                </li>
                )
            })}

        </ul>
        </nav>
)   
}

export default TopicTabs