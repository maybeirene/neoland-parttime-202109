import './Landing.css'
import { useNavigate }  from 'react-router-dom'
export default function() {
    const navigate = useNavigate()
    return <div className="Landing">
       
        <h1 className="Landing__title">APP TITLE</h1>
        <p className="Landing__explain"> The easiest way to find code beasts
        or maybe you are who they are looking for</p>
        <div className="Landing__buttonContainer">
            <button className="Landing__button-primary" onClick={()=>navigate("/registerCompany")}>Looking for talent</button>
            <button className="Landing__button-primary" onClick={()=>navigate("/registerDeveloper")}>Code beast 🦁</button>
        </div>

        <p>Already have an account? Please, <a onClick={()=>navigate("/login")}>log in</a></p>
    </div>
    
   
}