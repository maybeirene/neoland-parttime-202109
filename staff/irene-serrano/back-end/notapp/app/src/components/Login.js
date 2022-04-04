import { authenticateUser } from '../logic'

export default ({onLoggedIn}) => {
    const login = event => {
        event.preventDefault()
        const { target: 
            {
             email: {value: email}, 
             password: {value:password}
            }} = event

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
    }
    return <form onSubmit={login}>
      
        <input type="email" name="email" placeholder="email"/>
        <input type="password" name="password" placeholder="password"/>
    
        <button type="submit">Login</button>
        <p>Don't have an account yet? Please, <a href="/register">register</a></p>
    </form>
}

