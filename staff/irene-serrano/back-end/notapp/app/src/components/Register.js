import { registerUser } from '../logic'

function Register(){
    const register = event => {
        event.preventDefault()
        const { target: 
            { name: {value: name}, 
             email: {value: email}, 
             password: {value:password}
            }} = event

        try {
            registerUser( name, email, password)
                .then(()=> console.log('user registered'))
                .catch(error=> alert(error.message))
        }catch (error){
            alert(error.message + ' from catch @ Register compo line 17')
        }
    }
    return <form onSubmit={register}>
        <input type="text" name="name" placeholder="name"/>
        <input type="email" name="email" placeholder="email"/>
        <input type="password" name="password" placeholder="password"/>
    
        <button type="submit">Register</button>
    
    </form>
}

export default Register