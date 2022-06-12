function DeveloperDetailPanel({content}) {
    return <>
        <h3 className="detail__title">{content.name}</h3>
        <div className="detail__itemGroup">
            <p className="detail__text">{content.location}</p>
            <p className="detail__stack">{content.stack}</p>
        </div>
        
        <p className="detail__text">{content.description}</p>
        <p className="detail__text">Want to know more about me? Visit my <a href={content.link}>webpage</a></p>
        
        <button className="detail__contactButton">Contact</button>

    </>
}
export default DeveloperDetailPanel