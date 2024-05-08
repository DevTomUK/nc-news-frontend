import { Link } from "react-router-dom"

function Header() {
    return (
    <header className="navbar">
        <Link to="/" >
                <h1>NC News</h1>   
        </Link>
            <ul className="nav-links">
                <Link to="/" >
                    <li>Home</li>
                </Link>
                <Link to="/articles/" >
                    <li>All Articles</li>
                </Link>
            </ul>
    </header>
    )
}

export default Header