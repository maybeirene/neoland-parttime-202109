import { useNavigate } from "react-router-dom"

export default function (){
    const navigate = useNavigate()

    return <div>
    <a onClick={() => navigate("/")}>back</a>
    <h1>Company profile manage</h1>
</div>
}