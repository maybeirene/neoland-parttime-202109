import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { setRequestSeen, setRequestContacted, setRequestRejected, retrieveCandidate } from '../logic'
import './lists.css'

export default function ({ requestId, offerId }) {

    const [candidate, setCandidate] = useState()
    const [seen, setSeen] = useState()
    const [contacted, setContacted] = useState()
    const [rejected, setRejected] = useState()

    const navigate = useNavigate()


    useEffect(() => {
        getCandidate(requestId)
        
    }, )

    const getCandidate = (requestId) => {
        try {
            retrieveCandidate(offerId, requestId)
                .then(candidate => {
                    setCandidate(candidate)
                    setSeen(candidate.seen)
                    setContacted(candidate.contacted)
                    setRejected(candidate.rejected)
                })
        } catch (error) {
            console.error(error)
        }
    }

    const setProfileSeen = () => {
        try {
            setRequestSeen(offerId, candidate.id, sessionStorage.token)
                .then(() => {
                    setSeen(true)
                    navigate(`../developer/${candidate.developerId}`)
                })

        } catch (error) {
            console.error(error)
        }
    }
    const setProfileRejected = () => {
        try {
            setRequestRejected(offerId, candidate.id, sessionStorage.token)
                .then(() => {
                    setRejected(true)
                })
        } catch (error) {
            console.error(error)
        }
    }

    const setProfileContacted = () => {
        try {
            setRequestContacted(offerId, candidate.id, sessionStorage.token)
                .then(() => {
                    setContacted(true)
                    console.log('email enviado')
                })
        } catch (error) {
            console.error(error)
        }
    }


    return candidate ? (
        <div className={!seen ? 'OfferCandidateItem-new': rejected ? 'OfferCandidateItem-rejected' : 'OfferCandidateItem-seen' }>
            <div className="OfferCandidateItem__titleGroup">
                
                {rejected ? <span className="CandidateItem__name-rejectedAdvice">❌</span> 
                        : <span>⚪️</span>}

                <p className="CandidateItem__name">{candidate.developerName}</p>

                {seen ? null 
                    : <span className="CandidateItem__name-newAdvice">New!</span>}
                

            </div>
            <div className="OfferCandidateItem__buttonGroup">
                {!seen ?
                    <button onClick={setProfileSeen}>See profile</button>
                    : null}

                {contacted ?
                    <span className="CandidateItem__contadted">Contacted ✔️</span>
                    : <button onClick={setProfileContacted}>Contact</button>}

                {rejected ?
                        <span className="CandidateItem__rejectedAdvice">Rejected!</span>
                    : <button onClick={setProfileRejected} >Reject candidate</button>}
            </div>
        </div>
    ) : <h3>requests not found</h3>
}


