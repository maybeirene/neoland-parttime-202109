class Nav extends React.Component {
    constructor(){
        super()
      
    }


    render(){
        return this.props.loged === false? 
        <div className="nav">
            <h2 className="logo selectable" onClick={this.props.handleBack}>cars<span className="logo-detail">&</span>us</h2>
            <span className="selectable" onClick={this.props.onClickLogin} >Please, log in</span>
        </div> :
        <div className="nav">
            <h2 className="logo">cars<span className="logo-detail">&</span>us</h2>
            <span className="selectable" >{this.props.username}</span>
            <span className="selectable" onClick={this.props.onLogOut}>❌ Log out</span>
        </div>
    }
}