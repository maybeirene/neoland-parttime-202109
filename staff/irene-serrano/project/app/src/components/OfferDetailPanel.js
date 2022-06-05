import { useNavigate } from "react-router-dom"

function OfferDetailPanel({ content }) {
    const navigate = useNavigate()
    return <div className="Offer__detail">
        <h3 className="detail__title">{content.title}</h3>

        <div className="detail__itemGroup">
            <div className="detail__itemSubgroup">
                <p className="detail__text">{content.location}</p>
            </div>
            <div className="detail__itemSubgroup">
                <p className="detail__text detail__text-bubble">{content.stack}</p>
                <p className="detail__text">{content.minSalary}-{content.maxSalary}€</p>           
            </div>
        </div>

        <p className="detail__description">{content.description}</p>
        
        <button className="Developer__contactButton-primary">Contact</button>
        
        <p className="detail__text">Offer published by <a onClick={()=>{navigate(`/offer/owner/${content.companyId}`)}}>{content.companyName}</a></p>

        
    </div>
}
export default OfferDetailPanel