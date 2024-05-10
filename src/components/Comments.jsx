import { useEffect, useState } from "react"
import CommentCard from "./CommentCard";
import { getCommentsByArticleId, postNewComment } from "../api/apiFunctions";


function Comments({article_id}) {

    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState("")
    const [loggedInUser] = useState("jessjelly")
    const [commentData, setCommentData] = useState({})
    const [commentPending, setCommentPending] = useState(false)
    const [refresh, setRefresh] = useState(0)
    const [commentTooShort, setCommentTooShort] = useState(false)

    function handleSubmitComment(e) {
        if (newComment.length === 0) {
            setCommentTooShort(true)
        } else {
            setCommentTooShort(false)
        setCommentPending(true)
        e.preventDefault()
        postNewComment(article_id, commentData)
        .then((response)=>{
            setCommentPending(false)
            setNewComment("")
            setRefresh(Math.random())
        })
        .catch((error)=>{
            setCommentPending(false)
        })}
    }

    useEffect(()=>{
        setCommentData({
            username: loggedInUser, 
            body: newComment
        })
    }, [newComment])

    useEffect(()=>{
        getCommentsByArticleId(article_id)
        .then((response)=>{
            response.data.comments.forEach((comment)=>{
            const splitDate = comment.created_at.split("T");
            const formattedDate = splitDate[0]
            comment.created_at = formattedDate
        })
            setComments(response.data.comments)
       })
    }, [refresh])

    return (
        <main className="comments-section">
            <h4>Comments:</h4>
            <hr></hr>
            <section className="new-comment-card" >
                {commentPending && <p className="posting-comment">Posting...</p>}
                <p className="new-comment-author">UserNameHere</p>
                <br />
                <form onSubmit={handleSubmitComment}>
                    <label htmlFor="newCommentInput">New Comment:</label>
                    <textarea placeholder="Enter comment here..." onChange={(e)=>{
                        setNewComment(e.target.value)
                        setCommentTooShort(false)
                    }} 
                    id="newCommentInput"
                    disabled={commentPending}
                    value={newComment} rows="6" type="text" className={commentPending ? "new-comment-body-disabled" : "new-comment-body"} />
                    <div className="submit-comment-div">
                        {commentTooShort && <p className="comment-too-short-text">Comment Too Short</p>}
                        <button disabled={commentPending} className="new-comment-button">Submit</button>
                    </div>
                </form>
            </section>
            <ul className="comments-list">
                {comments.map((comment)=>{
                    return <CommentCard key={comment.comment_id} comment={comment} comments={comments} setComments={setComments} loggedInUser={loggedInUser} setRefresh={setRefresh}/>
                })}
            </ul>
        </main>
    )
}

export default Comments