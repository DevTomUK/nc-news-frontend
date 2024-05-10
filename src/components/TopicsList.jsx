import { useEffect } from "react"
import { Link } from "react-router-dom"
import { getTopicsList } from "../api/apiFunctions"

function TopicsList({topicsList, setTopicsList}) {


    useEffect(()=>{
        getTopicsList()
        .then((response)=>{

            setTopicsList(response.data.topics)
        })

    }, [])

    return (
            <ul className="topic-list">
            <h2>Topics:</h2>
            <br />
            {topicsList.map((topic)=>{
                return <section tabindex="0" key={topic.slug} className="topic-div">
                    <img className="topic-image" alt={`image displaying the topic of ${topic.slug}`} src={`/images/${topic.slug}.jpeg`} />
                    <Link to={topic.slug}>
                        <div className="topic-card-text">
                            <p className="topic-slug">{topic.slug.toUpperCase()}</p>
                            <p className="topic-description">{topic.description}</p>
                        </div>
                    </Link>
                </section>
            })}
            </ul>
    )
}

export default TopicsList