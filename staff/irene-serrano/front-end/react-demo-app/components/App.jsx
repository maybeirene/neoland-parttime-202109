class App extends React.Component {
    constructor(){
        super()
        this.state = {
            view : sessionStorage.token ? 'home' : 'land',
            token: sessionStorage.token ? sessionStorage.token : null,
            city: null,
            username: null
            
        }
    }
    componentDidMount(){
        logger.debug('APP => componentDidMount')
       try {

            retrieveUser(sessionStorage.token, (error, user)=>{
                if(error){
                    this.setState({feedback: error.message})
                    return
                }

                this.setState({username: user.username , city: user.city? user.city : 'this user has no city assigned' })
                console.log(this.state)
            })
            
            
        }catch (error) {
            delete sessionStorage.token
            this.setState({feedback: error.message})
        }
    }

    render(){
        return <div>
            <Nav loged={this.state.view === 'home' ? true : false} 
                
                handleBack={()=> this.setState({view : sessionStorage.token ? 'home' : 'land'})}
                
                onClickLogin={e => {
                    e.preventDefault()
                    
                    this.setState({view : 'login'})}}

                
                
                onLogOut={()=>{
                    delete sessionStorage.token 
                    this.setState({token : null, view: 'land'})
                }}

                username={this.state.username}
               
               />

        {this.state.view === 'land'?
            <Land onClickLogin={e => {
                e.preventDefault()
                
                this.setState({view : 'login'})
            }}
            onClickRegister={e => {
                e.preventDefault()
                this.setState({view : 'register'})
            }
        }/> :
        
        this.state.view === 'register'? 
            <Register onClickLogin={e => {
                e.preventDefault()
                this.setState({view : 'login'})
            }} 
            
            onRegistered={()=> this.setState({view: 'home'})}/> :
        
        
        this.state.view === 'login'?
            <Login onClickRegister={e => {
                e.preventDefault()
                this.setState({view : 'register'})
            }}
            onLoggedIn={_token => this.setState({view: 'home', token: _token})}
            /> :
        
        this.state.view === 'home'? 
        <div className="home-container">
            <Search />
            <Forecast city={this.state.city}/>
        </div>
             :
            <h3>Something went wrong</h3>}
       
        </div>
        
    }
}