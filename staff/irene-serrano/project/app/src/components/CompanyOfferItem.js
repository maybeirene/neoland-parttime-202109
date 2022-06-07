import { useNavigate } from "react-router-dom"
import { useState } from 'react'
import { activateOffer, deactivateOffer, deleteOffer } from "../logic"
import "./offerManager.css"

export default function ({ content, onDeleteItem }) {

    const [active, setActive] = useState(content.active)
    const navigate = useNavigate()
    const date = content.publicationDate

    function formatDate() {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dec"]
        const day = date.substr(8, 2)
        const month = date.substr(5, 2)
        const year = date.substr(0, 4)
        const hour = date.substr(11, 5)

        return `${day} ${months[month - 1]} ${year}, ${hour}`
    }

    function deactivate() {
        try {
            deactivateOffer(sessionStorage.token, content.id)
                .then(() => setActive(false))
        } catch (error) {
            console.error(error)
        }
    }

    function activate() {
        try {
            activateOffer(sessionStorage.token, content.id)
                .then(() => setActive(true))
        } catch (error) {
            console.error(error)
        }
    }

    const handleDelete = () => {
        try {
            deleteOffer(sessionStorage.token, offerId)
            .then(()=>{
                console.log('oferta borrada')
                onDeleteItem()
            })
        } catch (error) {
            console.error(error)
        }
    }
    const formatedDate = formatDate(date)
    const offerId = content.id




    return <div className={(active === true ? "CompanyOffer__item CompanyOffer__item-active" : "CompanyOffer__item CompanyOffer__item-inactive")}>
        <h3 className="item__title">{content.title}</h3>
        <p className="item__text">Created on: {formatedDate}</p>

        <div className="item__buttonGroup">
            <button onClick={() => navigate(`/my-offers/edit/${offerId}`)}>🖋️ </button>
            {active === true ?
                <button onClick={() => deactivate()}>🔇</button>
                :
                <button onClick={() => activate()}>🔈</button>}
            <button onClick={() => handleDelete()}>🗑️</button>
        </div>
    </div>

}