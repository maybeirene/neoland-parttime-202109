import './Landing.css'
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
    
    return <div className='Login'>
        <a onClick={() => navigate("/")}>back</a>
        <h2>Log in</h2>
        <form  className='Login__form' onSubmit={login}>
            <input className='form__input' type="email" name="email" placeholder="email" />
            <input className='form__input' type="password" name="password" placeholder="password" />

            {feedback? <p>{feedback}</p>: null}

            <button type="submit" className='Login__button-primary-full'>Submit</button>
        </form>
    </div>
}