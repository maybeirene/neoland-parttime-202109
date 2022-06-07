import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { retrieveCompany, updateCompany, unregisterCompany } from '../logic'


export default function ({onCompanyDeleted}) {
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
                .then(onCompanyDeleted)
                .catch(error=> console.log(error))
        } catch (error) {
            setFeedback(error.message)
        }
    }

    return <div className="Company__profileManager">
        <a onClick={() => navigate("/")}>back</a>
        {company ?
            <>
                <h2 className="profileManager__title">{company.name}</h2>
                <form  className="profileManager__form"onSubmit={saveCompany}>

                        <input className="profileManager__input" type="text" name="name" defaultValue={company.name} />    

                        <textarea className="profileManager__input" type="text" name="description" defaultValue={company.description} /> 

                        <input className="profileManager__input" type="text" name="location" defaultValue={company.location ? company.location : ""} placeholder="location" />        

                        <input className="profileManager__input" type="text" name="link" defaultValue={company.link ? company.link : ""} placeholder="link" />
                    {feedback? <p>{feedback}</p> : null}
                    <button className="profileManager__submitButton" type="submit">Save</button>

                </form>
                
                <button className="profileManager__deleteButton" onClick={() => unregister()}>
                   Delete User
                </button>
            </>
            : <h3>not found</h3>}
    </div>
}