import {authenticateUser} from '../logic'
import { useState } from 'react'
import { useNavigate }  from 'react-router-dom'


export default function ({onLoggedIn}){
    const [feedback, setFeedback] = useState()
    const navigate = useNavigate()

    const login = event => {
        event.preventDefault()

        const { target: { email: { value: email }, password: { value: password } } } = event

        try {
            authenticateUser(email, password)
                .then(token => {
                    sessionStorage.token = token
                    onLoggedIn()
                })
                .catch(error => {
                    setFeedback(error.message)
                    if (error.message === 'token expired') delete sessionStorage.token
                })
        } catch (error) {
            setFeedback( error.message )
        }
    }
    
    return <div>
        <a onClick={() => navigate("/")}>back</a>
        <form onSubmit={login}>
            <input tyoe="text" name="email" placeholder="email" />
            <input type="password" name="password" placeholder="password" />

            {feedback? <p>{feedback}</p>: null}

            <button>Submit</button>
        </form>
    </div>
}