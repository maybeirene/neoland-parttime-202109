class Register extends React.Component {
  constructor() {
    super()
    this.state = {
      feedback: null,
    }
    this.username;
    this.password;
  }
  componentWillUpdate(){
    logger.debug('REGISTER => componentWillUpdate')

    authenticateUser(this.username,this.password, error=>{
      if(error){
        return alert ('error autenticando al usuario')
      }else{
        logger.debug('REGISTER => authenticate')
        sessionStorage.token = token
      }
      
    })
  }

  render() {
    return <div className="register-container panel">
        <h2>Register</h2>
        <form
          className="register-form form-container"
          onSubmit={event => {
            event.preventDefault();

            const username = event.target.username.value;
            const email = event.target.email.value;
            const city = event.target.city.value;
            const password = event.target.password.value;
            this.username = username
            this.password = password

            try {
              registerUser(username, email, city, password, error => {
                if (error) {
                  this.setState({ feedback: error.message })
                  return
                }
                
                  this.props.onRegistered()
                  
                })
            } catch (error) {
              this.setState({ feedback: error.message })
            }
          
          
          
          }}>

          <input type="text" name="username" placeholder="Username" />
          <input type="email" name="email" placeholder="E-mail" />
          <input type="text" name="city" placeholder="City" />
          <input type="password" name="password" placeholder="Password" />
          
          <button className="btn-full">Submit</button>
          
          <p>
            Already have an account? Please, 
            <span className="link selectable" onClick={this.props.onClickLogin}> log in</span>
            .
          </p>

          {this.state.feedback ? (
            <p className="message-error">{this.state.feedback}</p>
          ) : null}
        </form>
      </div>
  }
}
