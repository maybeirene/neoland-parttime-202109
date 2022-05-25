import { retrieveOffer } from '../logic'
import { useState, useParams, useEffect } from 'react'


function OfferDetail() {
    const [offer, setOffer] = useState[null]
    const [feedback, setFeedback] = useState()
    const { offerId } = useParams()

    const getOffer = (offerId) => {
        try {
            retrieveOffer(offerId, sessionStorage.token)
                .then(offer => {
                    setOffer(offer)
                })
        } catch (error) {
            setFeedback(error.message)
        }
    }

    useEffect(() => {
        getOffer()
    }, [])

    return <div>
        <a href="/">back</a>
        {offer ? <h1>{offer.title}</h1> : <h3>Not found</h3>}
        {feedback ? <p>{feedback}</p> : null}
    </div>
}
export default OfferDetail