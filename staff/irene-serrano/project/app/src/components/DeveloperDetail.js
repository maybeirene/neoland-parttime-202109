import { retrieveDeveloper } from '../logic'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import DeveloperDetailPanel from './DeveloperDetailPanel'

function DeveloperDetail() {
    const [developer, setDeveloper] = useState(null)
    const [feedback, setFeedback] = useState()
    const { developerId } = useParams()
    const navigate = useNavigate()
  
    useEffect(() => {
        try {
            retrieveDeveloper(developerId, sessionStorage.token)
                .then(developer =>{
                    
                    setDeveloper(developer)
                    
                })
        } catch (error) {
            setFeedback(error.message)
        }
    }, [])

    return <div className='DeveloperDetail'>
        <a onClick={()=>navigate("/")}>back</a>
        {developer ? <DeveloperDetailPanel content={developer}/> : <h3>Not found</h3>}
        {feedback ? <p>{feedback}</p> : null}
        <button className="Developer__contactButton-primary">Contact</button>

    </div>
}
export default DeveloperDetail