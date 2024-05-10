import { deleteComment } from "../api/apiFunctions"
import { useState } from "react"

function CommentCard({ comment, comments, setComments, loggedInUser, setRefresh }) {

    const [pendingDelete, setPendingDelete] = useState(false)

    function handleDeleteComment(id) {
        setPendingDelete(true)
        deleteComment(id)
        .then((data)=>{
            setPendingDelete(false)
            setRefresh(Math.random())
        })
        .catch(()=>{
            setPendingDelete(false)
        })
    }

    return (
        <section className={pendingDelete ? "comment-card-deleting" : "comment-card"}>
            {pendingDelete && <p className="deleting-text">DELETING</p>}
            {loggedInUser === comment.author && !pendingDelete && <div onClick={()=>{handleDeleteComment(comment.comment_id)}} className="comment-delete-button">&#10006;</div>}
            <p className="comment-author">{comment.author}:</p>
            <hr />
            <p className="comment-body">"{comment.body}"</p>
            <hr />
            <div className="comment-votes-div">
                <p className="comment-date">Created: {comment.created_at}</p>
                <p className="comment-votes">
                    <span className="vote-arrow">&#8681;</span> 
                    Votes: {comment.votes} 
                    <span className="vote-arrow">&#8679;</span> 
                </p>
            </div>
        </section>
    )
}

export default CommentCard