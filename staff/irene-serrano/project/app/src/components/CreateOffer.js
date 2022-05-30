import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import createOffer from "../logic/createOffer"

export default function () {
    const navigate = useNavigate()
    const [feedback, setFeedback] = useState()
    const newOffer = event => {
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
            createOffer(sessionStorage.token, title, description, stack, parseInt(minSalary), parseInt(maxSalary), location)
                .then(() => {
                    setFeedback('✅ oferta creada')
                })
        } catch (error) {
            setFeedback(error.message)
        }
    }
    return <div>
        <a onClick={() => navigate("/")}>back</a>
        <h2>New Offer</h2>
        <form onSubmit={newOffer}>
            <input type="text" name="title" placeholder="title" required />
            <textarea name="description" placeholder="description" required />
            <select name="stack"  required >
                <option disabled label="Choose your offer stack" > </option>
                <option value="full-stack">Full stack</option>
                <option value="front-end">Front end</option>
                <option value="back-end">Back end</option>
            </select>
            <input type="number" name="minSalary" placeholder="minimun salary" required/>
            <input type="number" name="maxSalary" placeholder="maximun salary" required/>

            <input type="text" name="location" placeholder="location" required />


            {feedback ? <p>{feedback}</p> : null}
            <button type="submit">Sumbit</button>

        </form>
    </div>
}