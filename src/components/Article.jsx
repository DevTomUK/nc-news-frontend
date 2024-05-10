import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "./Comments";
import NotFoundArticle from "./NotFoundArticle";

function Article() {
    const { article_id } = useParams()
    const [article, setArticle] = useState({})
    const [votePending, setVotePending] = useState(false)
    const [noArticleFound, setNoArticleFound] = useState(false)

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
            setNoArticleFound(false)
            const splitDate = response.data.created_at.split("T");
            const formattedDate = splitDate[0]
            response.data.created_at = formattedDate
            setArticle(response.data)
        })
        .catch((error)=>{
            setNoArticleFound(true)
        })
    }, [article_id]);

    if (noArticleFound) {
        return <NotFoundArticle />
    }

    return (
            <article className="article-container">
                <h3 className="article-page-title">{article.title}</h3>
                <section className="article-page-info">
                    <p>Written by {article.author}</p>
                    <p>Date: {article.created_at}</p>
                </section>
                <img className="article-page-image" src={article.article_img_url} />
                <p className="article-page-body">{article.body}</p>
                <section className="article-vote">
                    <span tabindex="0" onClick={handleDownVote}  className="vote-arrow">&#8681;</span> 
                        <p>Votes: {article.votes}</p>
                        {votePending && <p className="voting small-text">Voting</p>}
                    <span tabindex="0" onClick={handleUpVote} className="vote-arrow">&#8679;</span>                 
                </section>
                <Comments article_id={article_id}/>
            </article>
    )
}

export default Article