import './Nav.css'

export default ({onLogout}) =>{

    return <nav className="Nav">
        <span className="Nav__logo" >NOTAPP</span>
        <div className="Nav__linksContainer">
            <a className="Nav__link">My notes</a>
            <a className="Nav__link">Buscar</a>
            <a className="Nav__link">My profile</a>
            <a onClick={onLogout} className="Nav__link">Logout</a>
        </div>
    </nav>
}