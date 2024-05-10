import { useContext } from "react"
import UserContext from "../contexts/UserContext"

function UserLoggedIn() {

    const { user, login, logout } = useContext(UserContext)

    return (
        <div className="logged-in-div">
            {!user && <p onClick={login} className="logged-in-user">Log in</p>}
            {user && <p onClick={logout} className="logged-in-user">Logged in as: {user}</p>}
        </div>
    )
}

export default UserLoggedIn