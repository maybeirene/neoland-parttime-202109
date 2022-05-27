import { useNavigate } from "react-router-dom"

export default function (){
    const navigate = useNavigate()
    return <div> 
         <a onClick={()=>navigate("/")}>back</a>
         <h2>New Offer</h2></div>
}