import { authenticateUser } from '../logic'

function Login(){
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
                    console.log(res)
                    console.log('user authenticated')
                })
                .catch(error=> alert(error.message))
        }catch (error){
            alert(error.message + ' from catch @ Logic compo line 17')
        }
    }
    return <form onSubmit={login}>
      
        <input type="email" name="email" placeholder="email"/>
        <input type="password" name="password" placeholder="password"/>
    
        <button type="submit">Login</button>
    
    </form>
}

export default Login