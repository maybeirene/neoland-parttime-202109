function DeveloperDetailPanel({content}) {
    return <>
        <h3 className="detail__title">{content.name}</h3>
        <div className="detail__itemGroup">
            <p className="detail__text">{content.location}</p>
            <p className="detail__stack">{content.stack}</p>
        </div>
        
        <p className="detail__text">{content.description}</p>
        <p className="detail__text">{content.link}</p>
        
        <button className="detail__contactButton">Contact</button>

    </>
}
export default DeveloperDetailPanel