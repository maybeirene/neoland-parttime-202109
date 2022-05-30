import './Developer.css'
export default function ({content}){
    return <div className="Developer__item">
        <h3>{content.name}</h3>
        <div>
            <p>{content.stack}</p>
            <p>{content.location}</p>
        </div>
        <button className="Developer__contactButton-primary">Contact</button>
    </div>

}