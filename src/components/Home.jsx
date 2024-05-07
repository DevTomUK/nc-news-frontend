import { Link } from "react-router-dom"

function Home () {
    return (
        <div className="home-div">
            <Link to="/articles/">
            <h2>All Articles</h2>
            </Link>
        </div>
    )
}

export default Home