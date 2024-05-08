import { useEffect, useState } from "react"
import axios from "axios";
import CommentCard from "./CommentCard";

function Comments({article_id}) {

    const [comments, setComments] = useState([])

    useEffect(()=>{
        axios
        .get(`https://backend-project-c921.onrender.com/api/articles/${article_id}/comments`)
       .then((response)=>{
            response.data.comments.forEach((comment)=>{
            const splitDate = comment.created_at.split("T");
            const formattedDate = splitDate[0]
            comment.created_at = formattedDate
        })
            setComments(response.data.comments)
       })
    }, [])

    return (
        <div className="comments-section">
            <h4>Comments:</h4>
            <hr></hr>
            <ul className="comments-list">
                {comments.map((comment)=>{
                    return <CommentCard key={comment.comment_id} comment={comment} comments={comments} setComments={setComments}/>
                })}
            </ul>
        </div>
    )
}

export default Comments