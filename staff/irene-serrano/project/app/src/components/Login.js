import {authenticateUser} from '../logic'
import { useState } from 'react'


export default function ({onLoggedIn}){

    const [feedback, setFeedback] = useState()
    const login = event => {
        event.preventDefault()

        const { target: { email: { value: email }, password: { value: password } } } = event

        try {
            authenticateUser(email, password)
                .then(token => {
                    sessionStorage.token = token
                    onLoggedIn()
                })
                .catch(error => setFeedback({ level: 'error', message: error.message }))
        } catch (error) {
            setFeedback({ level: 'error', message: error.message })
        }
    }
    
    return <div>
        <form onSubmit={login}>
            <input name="email" placeholder="email" />
            <input name="password" placeholder="password" />

            {feedback? <p>{feedback}</p>: null}

            <button>Submit</button>
        </form>
    </div>
}