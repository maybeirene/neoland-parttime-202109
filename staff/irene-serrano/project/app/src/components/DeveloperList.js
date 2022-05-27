import { useState, useEffect } from "react"
import DeveloperItem from './DeveloperItem'
import { retrieveAllDevelopers } from '../logic'


function DeveloperList ({onItemClick}){
    const [developers, setDevelopers] = useState()
    const [feedback, setFeedback] = useState()

    const clickDeveloper = id => onItemClick(id)

    const getAllDevelopers = () => {
        try {
            retrieveAllDevelopers(sessionStorage.token)
            .then(developers=> setDevelopers(developers))
        } catch (error){
            setFeedback(error.message)
        }
    }

    useEffect(()=>{
        getAllDevelopers()
    }, [])

    return <div>
        <ul>
            {developers? developers.map(developer=>{
                return <li key={developer.id} onClick={()=> clickDeveloper(developer.id)} >
                    <DeveloperItem content={developer} />
                </li>
            })
            : <div>
                <h3>Not found</h3>
                {feedback ? <p>{feedback}</p> : null}
            </div>
            }
        </ul>
    </div>
}
export default DeveloperList