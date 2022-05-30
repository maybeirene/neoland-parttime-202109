import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { retrieveCompany, updateCompany, unregisterCompany } from '../logic'


export default function () {
    const navigate = useNavigate()
    const [company, setCompany] = useState()
    const [feedback, setFeedback] = useState()

    useEffect(() => {
        try {
            retrieveCompany(sessionStorage.token)
                .then((company) => setCompany(company))
        }
        catch (error) { setFeedback(error.message) }
    }, [])

    const saveCompany = (event) => {
        event.preventDefault()

        const { target:
            { name: { value: name },
              description: { value: description },
              location: { value: location },
              link: { value: link }
            } } = event

        try {
            updateCompany(sessionStorage.token, name, description, location, link)
                .then(() => setFeedback(' ✅ compañia actualizada'))
        } catch (error) {
            setFeedback(error.message)
        }
    }

    const unregister = () => {
        try {
            unregisterCompany(sessionStorage.token)
                .then(() => {
                    
                    console.log('CUENTA ELIMINADA')
                    delete sessionStorage.token
                    navigate('/')
                })
                .catch(error=> console.log(error))
        } catch (error) {
            setFeedback(error.message)
        }
    }

    return <div>
        <a onClick={() => navigate("/")}>back</a>
        {company ?
            <div>
                <h2>{company.name} profile manage</h2>
                <form onSubmit={saveCompany}>

                    <div className="groupfield">
                        <input type="text" name="name" defaultValue={company.name} />    
                    </div>

                    <div className="groupfield">
                        <textarea type="text" name="description" defaultValue={company.description} /> 
                    </div>

                    <div className="groupfield">
                        <input type="text" name="location" defaultValue={company.location ? company.location : ""} placeholder="location" />        
                    </div>

                    <div className="groupfield">
                        <input type="text" name="link" defaultValue={company.link ? company.link : ""} placeholder="link" />
                    </div>
                    {feedback? <p>{feedback}</p> : null}
                    <button type="submit">Save</button>

                </form>
                
                <button className="CompanyProfile__deleteButton" onClick={() => unregister()}>
                   Delete User
                </button>
            </div>
            : <h3>not found</h3>}
    </div>
}