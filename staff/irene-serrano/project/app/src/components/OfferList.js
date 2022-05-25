import { useState, useEffect } from "react"
import OfferItem from './OfferItem'
import { retrieveAllOffers } from '../logic'


function OfferList ({onItemClick}){
    const [offers, setOffers] = useState()
    const [feedback, setFeedback] = useState()

    const clickOffer = id => onItemClick(id)

    const getAllOffers = () => {
        try {
            retrieveAllOffers()
            .then(offers=> setOffers(offers))
        } catch (error){
            setFeedback(error)
        }
    }

    useEffect(()=>{
        getAllOffers()
    }, [])

    return <div>
        <ul>
            {offers? offers.map(offer=>{
                return <li key={offer.id} onClick={()=> clickOffer(offer.id)} >
                    <OfferItem content={offer} />
                </li>
            })
            : <div>
                <h3>Not found</h3>
                {feedback? <p>{feedback}</p> : null}
            </div>
            }
        </ul>
    </div>
}
export default OfferList