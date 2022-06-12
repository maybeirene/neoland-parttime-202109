import { useState } from 'react'
import './candidates.css'
import OfferCandidatesItem from './OfferCandidatesItem'
export default function ({ requests, offerId }) {
    const [candidates, setCandidates] = useState(requests)
    
    
    return <>
        {candidates?  <ul className='OfferCandidatesList'>
            {candidates.map(candidate=>{
                return <li key={candidate.developer} className='OfferCandidatesListItem' >
                    <OfferCandidatesItem requestId={candidate._id} offerId={offerId} />
                </li>
                })
            }
        </ul> : <h3>Candidates not found</h3>}
    </>
}