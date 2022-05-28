function OfferDetailPanel({ content }) {
    return <div className="Offer__detail">
        <h3 className="detail__title">{content.title}</h3>
        <div className="detail__itemGroup">
            <p className="detail__text">{content.location}</p>
            <p className="detail__text detail__text-bubble">{content.stack}</p>
        </div>
        <p className="detail__description">{content.description}</p>
        <p className="detail__text">{content.minSalary}-{content.maxSalary}€</p>
        <p className="detail__text">{content.companyName}</p>
    </div>
}
export default OfferDetailPanel