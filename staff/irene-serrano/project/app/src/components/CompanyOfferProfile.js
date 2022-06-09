import './Company.css'
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

    return <div className="OfferCompany">
        <a onClick={()=> navigate('../')}>Home </a>
        {company ?
            <>
                <h3 className="OfferCompany__title">{company.name}</h3>
                <p className="OfferCompany__text">{company.description}</p>
                <p className="OfferCompany__text">Want to see more? Visit <a href={company.link}>{company.name}</a> web page.</p>
            </> 
        : null}

    </div> 
}
export default CompanyOfferProfile