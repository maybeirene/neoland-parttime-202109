import { useState, useEffect } from "react"
import CompanyOfferItem from './CompanyOfferItem'
import { retrieveCompany, retrieveCompanyOffers } from '../logic'
import "./offerManager.css"

function CompanyOfferList() {

    // hey! this!!!
    //const userId = "628fc0e630fcf5a8ead68056"

    const [offers, setOffers] = useState()
    const [feedback, setFeedback] = useState()

    const getCompanyOffers = () => {
        try {
            retrieveCompany(sessionStorage.token)
                .then(company => {
                    const userId = company.id
                    retrieveCompanyOffers(sessionStorage.token, userId)
                        .then(offers => {
                            setOffers(offers)
                        })
                })
        } catch (error) {
            console.error(error.message)
        }
    }
    useEffect(() => {
        getCompanyOffers()
    }, [])

    return <div className="CompanyOffer__list">
        <h2 className="CompanyOffers__title">My offers</h2>
        {offers ? offers.map(offer => {
            return <li key={offer.id}>
                <CompanyOfferItem content={offer} onDeleteItem={() => getCompanyOffers()} />
            </li>
        })
            : <h3>Not found :C </h3>}

    </div>
}
export default CompanyOfferList