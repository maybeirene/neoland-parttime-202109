import { useNavigate } from "react-router-dom"

function OfferDetailPanel({ content }) {
    const navigate = useNavigate()
    return <>
        <h3 className="detail__title">{content.title}</h3>

        <div className="detail__itemGroup">
            <div className="detail__itemSubgroup">
                <p className="detail__text">{content.location}</p>
            </div>
            <div className="detail__itemSubgroup">
                <p className="detail__stack ">{content.stack}</p>
                <p className="detail__text">{content.minSalary}-{content.maxSalary}€</p>           
            </div>
        </div>

        <p className="detail__description">{content.description}</p>
        
        <button className="detail__contactButton">Apply</button>
        
        <p className="detail__text">Offer published by <a onClick={()=>{navigate(`/offer/owner/${content.companyId}`)}}>{content.companyName}</a></p>

        
    </>
}
export default OfferDetailPanel