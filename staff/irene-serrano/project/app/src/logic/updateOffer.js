import { validators, errors } from 'commons'
import { validateToken } from 'commons/src/validators'


const { validateId } = validators
const { AuthError, ClientError, ServerError } = errors

export default function (token, offerId, title, description, stack, minSalary, maxSalary, location) {
    validateToken(token)
    validateId(offerId)

    return fetch(`http://localhost:8080/api/offer/${offerId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ title, description, stack, minSalary, maxSalary, location })

    })
        .then(res => {
            const { status } = res

            if (status === 200)
                return

            else if (status >= 400 && status < 500)
                return res.json()
                    .then(payload => {
                        const { error: message } = payload

                        if (status === 401)
                            throw new AuthError(message)
                        else
                            throw new ClientError(message)
                    })
            else if (status >= 500)
                return res.text()
                    .then(text => {
                        throw new ServerError(text)
                    })
        })
}
