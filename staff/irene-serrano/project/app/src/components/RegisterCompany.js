import { registerCompany, authenticateCompany } from '../logic'
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
                location: { value: location },
                link: { value: link }
            } } = event

        try {
            registerCompany(name, email, password, description, location, link)
                .then(() => {
                    try {
                        authenticateCompany(email, password)
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



    return <div>
        <a onClick={()=>navigate("/")}>back</a>
        <form onSubmit={register}>
            <input type="text" name="name" placeholder="name of the company" required/>
            <input type="email" name="email" placeholder="email" required/>
            <input type="password" name="password" placeholder="password" required/>
            <textarea name="description" placeholder="description" required/>
            <input type="text" name="location" placeholder="location" />
            <input type="text" name="link" placeholder="link" />

    {feedback? <p>{feedback}</p> : null}
            <button type="submit">Sumbit</button>
        </form>
    </div>


}