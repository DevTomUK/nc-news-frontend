import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Comments from "./Comments";

function Article() {
    const { article_id } = useParams()
    const [article, setArticle] = useState({})
    const [votePending, setVotePending] = useState(false)

    function handleUpVote(){

        setVotePending(true)

        const newVotes = article.votes +1
        setArticle({...article, votes: newVotes})
        axios.patch(`https://backend-project-c921.onrender.com/api/articles/${article_id}`, {inc_votes: 1})
        .then(()=>{
            setVotePending(false)
        })
        .catch(() =>{
            setVotePending(false)
            alert(`Vote Failed on article: \n\n ${article.title}. \n\n Please retry`)
        })
    }

    function handleDownVote(){
        setVotePending(true)
        const newVotes = article.votes -1
        setArticle({...article, votes: newVotes})
        axios.patch(`https://backend-project-c921.onrender.com/api/articles/${article_id}`, {inc_votes: -1})
        .then(()=>{
            setVotePending(false)
        })
        .catch(() =>{
            setVotePending(false)
            alert(`Vote Failed on article: \n\n ${article.title}. \n\n Please retry`)
        })
    }

    useEffect(() => {
        axios
        .get(`https://backend-project-c921.onrender.com/api/articles/${article_id}`)
        .then((response) => {
            const splitDate = response.data.created_at.split("T");
            const formattedDate = splitDate[0]
            response.data.created_at = formattedDate
            setArticle(response.data)
        })
    }, [article_id]);

    return (
        <div className="article-page">
            <h3 className="article-page-title">{article.title}</h3>
            <div className="article-page-info">
                <p>Written by {article.author}</p>
                <p>Date: {article.created_at}</p>
            </div>
            <img className="article-page-image" src={article.article_img_url} />
            <p className="article-page-body">{article.body}</p>
            <div className="article-vote">
                <span onClick={handleDownVote}  className="vote-arrow">&#8681;</span> 
                    <p>Votes: {article.votes}</p>
                    {votePending && <p className="voting small-text">Voting</p>}
                <span onClick={handleUpVote} className="vote-arrow">&#8679;</span>                 
            </div>
            <Comments article_id={article_id}/>
        </div>
    )
}

export default Article