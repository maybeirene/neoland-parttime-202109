import { useNavigate } from "react-router-dom"

export default function ({handleLogout}) {
    const navigate = useNavigate()
    return <nav>
        
        <a onClick={()=>navigate("/profile")}>Profile</a>
        <a href="/" onClick={handleLogout}>Logout</a>
    </nav>
}