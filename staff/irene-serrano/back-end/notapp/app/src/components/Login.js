import { authenticateUser } from '../logic'
import './Login.css'

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
    return <div className="login">
        <h3 className="login__title">Sign in</h3>
        <form className="login__form" onSubmit={login}>
      
      <input className="form__input" type="email" name="email" placeholder="email"/>
      <input className="form__input" type="password" name="password" placeholder="password"/>
  
      <button className="form__submit" type="submit">Login</button>
      <p>Don't have an account yet? Please, <a href="/register">register</a></p>
  </form>
    </div>
   
}

