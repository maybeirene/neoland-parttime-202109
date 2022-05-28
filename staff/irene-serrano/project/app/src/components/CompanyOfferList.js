import { useState, useEffect } from "react"
import CompanyOfferItem from './CompanyOfferItem'
import { retrieveCompanyOffers } from '../logic'
import "./Company.css"

function CompanyOfferList (){

     // hey! this!!!
     const userId = "628fc0e630fcf5a8ead68056"
    const [offers, setOffers] = useState()
    const [feedback, setFeedback] = useState()

    const getCompanyOffers =()=>{
        try {
            retrieveCompanyOffers(sessionStorage.token, userId)
                .then(offers => {
                    setOffers(offers)
                    })

        } catch (error) {
            console.error(error.message)
        }
    }
    useEffect(() => {
        getCompanyOffers()
    }, [])

    return <div className="Company__offerList">
        {offers ? offers.map(offer => {
            return <li key={offer.id}>
                <CompanyOfferItem content={offer} onDeleteItem={()=> getCompanyOffers() } />
            </li>
        })
            : <h3>Not found :C </h3>}
        
    </div>
}
export default CompanyOfferList