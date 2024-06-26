import { Link } from "react-router-dom"
import UserLoggedIn from "./UserLoggedIn"

function Header() {

    return (
    <header className="navbar">
        <Link to="/" >
                <h1 className="nc-red">NC News</h1>   
        </Link>
            <nav className="nav-links">
                <Link to="/" >
                    <li>Home</li>
                </Link>
                <Link to="/articles/" >
                    <li>Articles</li>
                </Link>
                <Link to="/topics/" >
                    <li>Topics</li>
                </Link>
            </nav>
            <UserLoggedIn />
    </header>
    )
}

export default Header