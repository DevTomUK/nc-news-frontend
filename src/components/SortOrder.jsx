import { Link, useSearchParams } from "react-router-dom"

function SortOrder({setSearchParams, setSortBy, setOrderBy}){
    return <div className="sort-and-order-div">
            <span>Sort By: </span>
        <div className="sort-by-div">
            <p onClick={()=>{setSortBy("created_at")}}>Date</p>
            <p onClick={()=>{setSortBy("comment_count")}}>Comments</p>
            <p onClick={()=>{setSortBy("votes")}}>Votes</p>
        </div>
            <span>Order By: </span>
        <div className="order-by-div">
            <p onClick={()=>{setOrderBy("ASC")}}>Ascending</p>
            <p onClick={()=>{setOrderBy("DESC")}}>Descending</p>
        </div>
    </div>
}

export default SortOrder