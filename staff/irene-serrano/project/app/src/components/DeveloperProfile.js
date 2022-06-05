import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { retrieveDeveloperFromProfile, updateDeveloper, unregisterDeveloper } from '../logic'


export default function ({ onDeveloperDeleted }) {
    const navigate = useNavigate()
    const [developer, setDeveloper] = useState()
    const [feedback, setFeedback] = useState()

    useEffect(() => {
        try {
            retrieveDeveloperFromProfile(sessionStorage.token)
                .then((developer) => setDeveloper(developer))
        }
        catch (error) { setFeedback(error.message) }
    }, [])

    const saveDeveloper = (event) => {
        event.preventDefault()

        const { target:
            { name: { value: name },
                description: { value: description },
                stack: { value: stack },
                location: { value: location },
                link: { value: link }
            } } = event

        try {
            updateDeveloper(sessionStorage.token, name, description, stack, location, link)
                .then(() => setFeedback(' ✅ compañia actualizada'))
        } catch (error) {
            setFeedback(error.message)
        }
    }

    const unregister = () => {
        try {
            unregisterDeveloper(sessionStorage.token)
                .then(onDeveloperDeleted)
                .catch(error => console.log(error))
        } catch (error) {
            setFeedback(error.message)
        }
    }

    return <div>
        <a onClick={() => navigate("/")}>back</a>
        {developer ?
            <div>
                <h2>{developer.name} profile manage</h2>
                <form onSubmit={saveDeveloper}>

                    <div className="form__groupfield">
                        <input type="text" name="name" defaultValue={developer.name} />
                    </div>

                    <div className="form__groupfield">
                        <textarea type="text" name="description" defaultValue={developer.description} />
                    </div>

                    <div className="form__groupfield">
                        <select name="stack" defaultValue={developer.stack}>
                            <option disabled > -- choose your stack -- </option>
                            <option value="full-stack">Full stack</option>
                            <option value="front-end">Front end</option>
                            <option value="back-end">Back end</option>
                        </select>
                    </div>

                    <div className="form__groupfield">
                        <input type="text" name="location" defaultValue={developer.location ? developer.location : ""} placeholder="location" />
                    </div>

                    <div className="form__groupfield">
                        <input type="text" name="link" defaultValue={developer.link ? developer.link : ""} placeholder="link" />
                    </div>
                    {feedback ? <p>{feedback}</p> : null}
                    <button type="submit">Save</button>

                </form>

                <button className="DeveloperProfile__deleteButton" onClick={() => unregister()}>
                    Delete User
                </button>
            </div>
            : <h3>not found: {feedback ? <p>{feedback}</p> : <p>not feedback</p>} </h3>}
    </div>
}