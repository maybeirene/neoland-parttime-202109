import { useEffect, useState } from "react"
import { useNavigate, Routes, Route } from "react-router-dom"
import CompanyOfferList from "./CompanyOfferList"
import EditOffer from "./EditOffer"

export default function () {
   
    const navigate = useNavigate()

    return <div>
        <a onClick={() => navigate("/")}>back</a>

        <h2>CompanyOffers</h2>
       
        <Routes>
            <Route path="/" element={<CompanyOfferList />} />
            <Route path="/edit/:offerId" element={<EditOffer />} />
        </Routes>
    </div>
}