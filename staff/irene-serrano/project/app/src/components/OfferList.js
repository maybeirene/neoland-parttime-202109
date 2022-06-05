import { useState, useEffect } from "react"
import OfferItem from './OfferItem'
import { retrieveAllOffers } from '../logic'


function OfferList ({onItemClick}){
    const [offers, setOffers] = useState()
    const [feedback, setFeedback] = useState()

    const clickOffer = id => onItemClick(id)

    const getAllOffers = () => {
        try {
            retrieveAllOffers(sessionStorage.token)
            .then(offers=> setOffers(offers))
        } catch (error){
            setFeedback(error.message)
        }
    }
    useEffect(()=>{
        getAllOffers()
    }, [])

    return <div className="Offer__list">
        <ul>
            {offers? offers.map(offer=>{ 
              if(offer.active === true) {
                return <li key={offer.id} onClick={()=> clickOffer(offer.id)} >
                    <OfferItem content={offer} />
                </li>
              }
              else return null
                
            })
            : <div>
                <h3>Not found</h3>
                {feedback ? <p>{feedback}</p> : null}
            </div>
            }
        </ul>
    </div>
}
export default OfferList