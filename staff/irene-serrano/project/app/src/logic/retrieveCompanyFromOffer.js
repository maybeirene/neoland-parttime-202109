import { validators, errors } from 'commons'

const { validateId } = validators
const { AuthError, NotFoundError, FormatError, ClientError, ServerError } = errors

export default function (companyId) {
    validateId(companyId)

    return fetch(`http://localhost:8080/api/company/${companyId}`, {
        method: 'GET',
    })
        .then(res => {
            const { status } = res

            if (status === 200)
                return res.json()
                    .then(company => {
                        return company
                    })
            else if (status >= 400 && status < 500)
                return res.json()
                    .then(payload => {
                        const { error: message } = payload

                        if (status === 400)
                            throw new FormatError(message)
                        if (status === 401)
                            throw new AuthError(message)
                        else if (status === 404)
                            throw new NotFoundError(message)
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