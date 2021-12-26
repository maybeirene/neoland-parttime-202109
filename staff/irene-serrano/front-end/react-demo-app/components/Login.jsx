class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            feebdack : null
        }
    }

    render(){
        return <div className="login-container panel">
            <h2>Login</h2>
            <form className="login-form form-container" onSubmit={event => {
                event.preventDefault()
                const username = event.target.username.value;
                const password = event.target.password.value;

                try{
                    authenticateUser(username, password, (error, token) => {
                        if(error){
                            this.setState({feedback: error.message})
                            return
                        }
                        this.props.onLoggedIn(token);
                        sessionStorage.token = token
                    })
                }catch (error) {
                    this.setState({ feedback: error.message });
                  }
            }}>
                <input type="text" name="username" placeholder="Username"/>
                <input type="password" name="password" placeholder="Password"/>

                <button className="btn-full">Submit</button>

                <p>Don't have an account? Please, <span className="link selectable" onClick={this.props.onClickRegister}>register</span>.</p>
                
                {this.state.feedback ? (
                <p className="message-error">{this.state.feedback}</p>
                ) : null}
            </form>
            

        </div>
    }
}