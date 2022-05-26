import { useNavigate }  from 'react-router-dom'
export default function() {
    const navigate = useNavigate()
    return <div>
       
        <h1>APP TITLE</h1>
        <p>The easiest way to find code beasts</p>
        <p><i>or maybe you are who they are looking for</i></p>
        <button onClick={()=>navigate("/registeCompany")}>Looking for talent</button>
        <button onClick={()=>navigate("/registerDeveloper")}>Code beast 🦁</button>

        <p>Already have an account? Please, <a onClick={()=>navigate("/login")}>log in</a></p>
    </div>
    
   
}