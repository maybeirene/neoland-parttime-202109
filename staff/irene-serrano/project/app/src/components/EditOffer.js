import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { retrieveOffer, updateOffer, deleteOffer } from "../logic"

export default function () {
    const { offerId } = useParams()
    const [offer, setOffer] = useState()
    const [feedback, setFeedback] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        try {
            retrieveOffer(offerId, sessionStorage.token)
                .then((offer) => setOffer(offer))
        }
        catch (error) { console.error(error) }
    }, [])


    const saveOffer = (event) => {
        event.preventDefault()
        const { target:
            {
                title: { value: title },
                description: { value: description },
                stack: { value: stack },
                minSalary: { value: minSalary },
                maxSalary: { value: maxSalary },
                location: { value: location }
            } } = event

        try {
            updateOffer(sessionStorage.token, offerId, title, description, stack, parseInt(minSalary), parseInt(maxSalary), location)
                .then(() => setFeedback(' ✅ oferta actualizada'))
        } catch (error) {
            setFeedback(error.message)
        }
    }

    const handleDelete = () => {
        try {
            deleteOffer(sessionStorage.token, offerId)
                .then(() => {
                    console.log('oferta borrada')
                    navigate('/my-offers')
                })
        } catch (error) {
            setFeedback(error.message)
        }
    }

    return <div>
        {offer ?
            <div className="EditOffer_content">
                <form onSubmit={saveOffer}>
                    <h1>{offer.title}</h1>
                    <div className="form__groupfield">
                        <input type="text" name="title" defaultValue={offer.title} />

                    </div>
                    <div className="form__groupfield">
                        <textarea type="text" name="description" defaultValue={offer.description} />

                    </div>
                    <div className="form__groupfield">
                        <select name="stack" defaultValue={offer.stack}>
                            <option value="full-stack" > Full stack </option>
                            <option value="front-end" >Front end</option>
                            <option value="back-end" >Back end</option>
                        </select>
                    </div>

                    <div className="form__groupfield">
                        <input type="number" name="minSalary" defaultValue={offer.minSalary} />
                    </div>

                    <div className="form__groupfield">
                        <input type="number" name="maxSalary" defaultValue={offer.maxSalary} />
                    </div>

                    <div className="form__groupfield">
                        <input type="text" name="location" defaultValue={offer.location} />
                    </div>
                    {feedback ? <p>{feedback}</p> : null}
                    <button type="submit">Save</button>

                </form>

                <button className="Edit__deleteButton" onClick={() => handleDelete()}>
                    Delete offer
                </button>
            </div>

            : <h1>Offer not found</h1>}
    </div>


}