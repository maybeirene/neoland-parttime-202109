import { registerDeveloper, authenticateDeveloper } from '../logic'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'



export default function ({ onRegistered }) {

    //const { setFeedback } = useContext(Context)
    const [feedback, setFeedback ] =useState()
    const navigate = useNavigate()
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
                .then(() => {
                    try {
                        authenticateDeveloper(email, password)
                            .then(res=> {
                                const token = res
                                sessionStorage.token = token
                                onRegistered()
                            })
                            .catch(error=> {
                                delete sessionStorage.token
                                setFeedback(error.message)
                              //  console.error(error.message)
                            })
                    }catch (error){
                        delete sessionStorage.token
                        setFeedback(error.message)
                       // console.error(error.message)
                    }
                })
               // .catch(error => setFeedback({ level: 'error', message: error.message }))
               .catch(error  => setFeedback(error.message))
        } catch (error) {
            setFeedback( error.message )
        }
    }



    return <div  className="Register">
        <a onClick={()=>navigate("/")}>back</a>
        <p>Are you a developer?</p>
        <h2>Register</h2>
        <form onSubmit={register}>
            <input type="text" name="name" placeholder="name and surname" required/>
            <input type="email" name="email" placeholder="email" required/>
            <input type="password" name="password" placeholder="password" required/>
            <textarea name="description" placeholder="description" required/>
            <select name="stack">
                <option dissabled="true" > -- choose your stack -- </option>
                <option value="full-stack">Full stack</option>
                <option value="front-end">Front end</option>
                <option value="back-end">Back end</option>
            </select>
            <input type="text" name="location" placeholder="location" />
            <input type="text" name="link" placeholder="link" />

    {feedback? <p>{feedback}</p> : null}
            <button className="Register__button-primary-full" type="submit">Sumbit</button>
        </form>
    </div>


}