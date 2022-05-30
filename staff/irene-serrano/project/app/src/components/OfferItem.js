export default function ({content}){
    return <div className="Offer__item">
        <h3 className="item__title">{content.title}</h3>
        <p>{content.stack}</p>
        <p>{content.location}</p>

    </div>

}