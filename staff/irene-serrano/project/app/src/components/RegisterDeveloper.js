import './Register.css'
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
        <h2 className='Register__title'>Register</h2>
        <form className='Register__form' onSubmit={register}>
            <input className='form__input' type="text" name="name" placeholder="name and surname" required/>
            <input className='form__input' type="email" name="email" placeholder="email" required/>
            <input className='form__input' type="password" name="password" placeholder="password" required/>
            <textarea className='form__input' name="description" placeholder="description" required/>
            <select className='form__input' name="stack">
                <option className='form__input' dissabled="true" > -- choose your stack -- </option>
                <option className='form__input' value="full-stack">Full stack</option>
                <option className='form__input' value="front-end">Front end</option>
                <option className='form__input' value="back-end">Back end</option>
            </select>
            <input className='form__input' type="text" name="location" placeholder="location" />
            <input className='form__input' type="text" name="link" placeholder="link" />

    {feedback? <p>{feedback}</p> : null}
            <button className="Register__button-primary-full" type="submit">Sumbit</button>
        </form>
    </div>


}