import { Link, useSearchParams } from "react-router-dom"

function SortOrder({setSearchParams, setSortBy, setOrderBy}){
    return <div className="sort-and-order-div">
            <span>Sort By: </span>
        <div className="sort-by-div">
            <p onClick={()=>{setSortBy("created_at")}}>created_at</p>
            <p onClick={()=>{setSortBy("comment_count")}}>comment_count</p>
            <p onClick={()=>{setSortBy("votes")}}>votes</p>
        </div>
            <span>Order By: </span>
        <div className="order-by-div">
            <p onClick={()=>{setOrderBy("ASC")}}>ASC</p>
            <p onClick={()=>{setOrderBy("DESC")}}>DESC</p>
        </div>
    </div>
}

export default SortOrder