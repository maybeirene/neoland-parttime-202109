class App extends React.Component {
  constructor() {
    super();
    this.state = {
      view:  'login',
      token: sessionStorage.token ? sessionStorage.token : null
    };
  }
 
  render() {
    if (this.state.view === 'login') {
      return <Login
        onRegisterClick={()=> {
          this.setState({view:'register'})
        }}
          onLoggedIn={token => this.setState({ view: 'home', token })}
        />
    } else if (this.state.view === 'register') {
      return <Register 
      onRegistered={()=> this.setState({view: 'home'})}
      onLoginClick={()=> this.setState({view: 'login'})
      } />
    }else if (this.state.view === 'reggister-succes') {
      return <RegisterSuccess onLoginClick={
        ()=> this.setState({ view: 'login'})
      } />;
    }else if (this.state.view === 'home') {
      return <Home token={this.state.token}  onLoggedOut={()=> this.setState({view:login, token})}/>;
    }
  }
}
