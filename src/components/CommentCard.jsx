function CommentCard({ comment, comments, setComments }) {

    return (
        <div className="comment-card">
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
        </div>
    )
}

export default CommentCard