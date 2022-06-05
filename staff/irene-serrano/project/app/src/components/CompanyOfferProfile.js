import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { retrieveCompanyFromOffer } from '../logic'

function CompanyOfferProfile({ }) {
    const navigate = useNavigate()
    const { companyId } = useParams()
    const [company, setCompany] = useState()
    const getCompany = () => {
        try {
            retrieveCompanyFromOffer(companyId)
                .then((company) => {
                    setCompany(company)
                })
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getCompany()
    }, [])

    return <div className="Offer__detail">
        <a onClick={()=> navigate('../')}>Home </a>
        {company ?
            <>
                <h3 className="detail__title">{company.name}</h3>
                <p>{company.description}</p>
            </> : null}

    </div> 
}
export default CompanyOfferProfile