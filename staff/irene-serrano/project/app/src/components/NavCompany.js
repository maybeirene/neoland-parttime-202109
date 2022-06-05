import { useNavigate } from "react-router-dom"
import './Nav.css'

export default function ({handleLogout}) {
    const navigate = useNavigate()
    return <nav className="Company__nav">
        <a onClick={()=>navigate("/my-offers")}>My offers</a>
        <a onClick={()=>navigate("/new-offer")}>✚</a>
        <a onClick={()=>navigate("/profile")}>Profile</a>
        <a href="/" onClick={handleLogout}>Logout</a>
    </nav>
}