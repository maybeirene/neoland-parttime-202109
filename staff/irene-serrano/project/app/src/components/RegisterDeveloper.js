import { registerDeveloper, authenticateDeveloper } from '../logic'
import { useState } from 'react'



export default function ({ onRegistered }) {

    //const { setFeedback } = useContext(Context)
    const [feedback, setFeedback ] =useState()

    const register = event => {
        event.preventDefault()

        const { target:
            { name: { value: name },
                email: { value: email },
                password: { value: password },
                description: { value: description },
                stack: { value: stack },
                location: { value: location },
                link: { value: link }
            } } = event

        try {
            registerDeveloper(name, email, password, description, stack, location, link)
                .then((email, password) => {
                    //setFeedback({ level: 'info', message: 'User successfully registered' })
                    authenticateDeveloper(email, password)
                    .then(token => {
                        sessionStorage.token = token
                        onRegistered()
                    })
                    .catch(error => setFeedback(error.message))
                })
               // .catch(error => setFeedback({ level: 'error', message: error.message }))
               .catch(error  => setFeedback(error.message))
        } catch (error) {
            setFeedback( error.message )
        }
    }



    return <div>
        <form onSubmit={register}>
            <input type="text" name="name" placeholder="name and surname" />
            <input type="email" name="email" placeholder="email" />
            <input type="password" name="password" placeholder="password" />
            <textarea name="description" placeholder="description" />
            <select>
                <option dissabled="true" > -- choose your stack -- </option>
                <option name="full-stack">Full stack</option>
                <option name="front-end">Front end</option>
                <option name="back-end">Back end</option>
            </select>
            <input type="text" name="location" placeholder="location" />
            <input type="text" name="link" placeholder="link" />

    {feedback? <p>{feedback}</p> : null}
            <button type="submit">Sumbit</button>
        </form>
    </div>


}