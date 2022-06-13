function DeveloperDetailPanel({content}) {
    return <>
        <h3 className="detail__title">{content.name}</h3>
        <div className="detail__itemGroup">
            <p className="detail__text">{!content.location? <i>Unknown location</i> : content.location}</p>
            <p className="detail__stack">{content.stack}</p>
        </div>
        
        <p className="detail__text">{!content.description? <i>No description...</i> : content.description}</p>
        {content.link? 
        <p className="detail__text">Want to know more about me? Visit my <a  target="_black"  href={content.link}>webpage</a></p>
        : null}
        
        <button className="detail__contactButton">Contact</button>

    </>
}
export default DeveloperDetailPanel