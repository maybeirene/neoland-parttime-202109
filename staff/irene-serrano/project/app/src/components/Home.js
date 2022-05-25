import { Route, Routes, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { extractPayload } from 'commons/src/validators'
import OfferList from './OfferList'
import OfferDetail from './OfferDetail'
/*import OfferItem from '.OfferItem'
import CompanyNav from './CompanyNav'
import CreateOffer from './CreateOffer'
import CompanyOffers from './CompanyOffers'
*/


export default function ({ onLoggedOut }) {
    const token = sessionStorage.token
    const payload = extractPayload(token)
    const [role] = useState(payload.role)

    const navigate = useNavigate()
    const logout = () => {
        delete sessionStorage.token
        onLoggedOut()
    }

    const showOfferDetail = offerId => navigate(`offer/${offerId}`)
    const showDeveloperDetail = developerId => navigate(`developer/${developerId}`)

    if (role === 1) {
        return <div>

            <Routes>
                <Route path="/" element={<OfferList onItemClick={showOfferDetail} />} />
                <Route path="/offer/:offerId" element={<OfferDetail />} />
            </Routes>
            <nav>
                <a href="#">Profile</a>
                <a href="/" onClick={logout}>Logout</a>
            </nav>
        </div>
    }

   /* if (role === 2) {
        return <div>

            <Routes>
                <Route path="/" element={<DeveloperList onItemClick={showDeveloperDetail} />} />
                <Route path="/developer/:developerId" element={<DeveloperDetail />} />
                <Route path="/new-offer" element={<CreateOffer />} />
                <Route path="my-offers" element={<CompanyOffers />} />
            </Routes>
            <nav>
                <a>My offers</a>
                <a href="#">Profile</a>
                <a href="/" onClick={logout}>Logout</a>
            </nav>
        </div>
    }*/

}