function DeveloperDetailPanel({content}) {
    return <div>
        <h3>{content.name}</h3>
        <div>
            <p>{content.location}</p>
            <p>{content.stack}</p>
        </div>
        
        <p>{content.description}</p>
        <p>{content.link}</p>
    
    </div>
}
export default DeveloperDetailPanel