 function OfferDetailPanel({content}) {
    return<div>
        <h3>{content.title}</h3>
        <p>{content.description}</p>
        <p>{content.location}</p>
        <p>{content.minSalary}</p>
        <p>{content.maxSalary}</p>
        <p>{content.companyName}</p>
    </div>
}
export default OfferDetailPanel