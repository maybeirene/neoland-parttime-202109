import { registerUser } from '../logic'
import { authenticateUser } from '../logic'

export default function ({onLoggedIn}){
    const register = event => {
        event.preventDefault()
        const { target: 
            { name: {value: name}, 
             email: {value: email}, 
             password: {value:password}
            }} = event

        try {
            registerUser( name, email, password)
                .then(()=>{
                    
                    
                    try {
                        authenticateUser(email, password)
                            .then(res=> {
                                const token = res.token
                                sessionStorage.token = token
                                onLoggedIn()
                            })
                            .catch(error=> {
                                delete sessionStorage.token
                                console.error(error.message)})
                    }catch (error){
                        delete sessionStorage.token
                        console.error(error.message)
                    }
                })
                .catch(error=> console.log(error.message))
        }catch (error){
            console.error(error.message)
        }
    }
    return <form onSubmit={register}>
        <input type="text" name="name" placeholder="name"/>
        <input type="email" name="email" placeholder="email"/>
        <input type="password" name="password" placeholder="password"/>
    
        <button type="submit">Register</button>

        <p>Do you already have an account? Please, <a href="/login">sign in</a></p>
    
    </form>
}
