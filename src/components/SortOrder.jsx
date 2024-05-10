function SortOrder({setSearchParams, setSortBy, setOrderBy}){
    return <article className="sort-and-order-div">
                <span>Sort By: </span>
                <div className="sort-by-div">
                    <button onClick={()=>{setSortBy("created_at")}}>Date</button>
                    <button onClick={()=>{setSortBy("comment_count")}}>Comments</button>
                    <button onClick={()=>{setSortBy("votes")}}>Votes</button>
                </div>
                <span>Order By: </span>
                <div className="order-by-div">
                    <button onClick={()=>{setOrderBy("ASC")}}>⬆</button>
                    <button onClick={()=>{setOrderBy("DESC")}}>⬇</button>
                </div>
            </article>
}

export default SortOrder