/* import {validators, errors} from 'commons'
const { validateToken, validateString, validateBoolean } = validators

export default function (userId, noteId) {
    
    return fetch('http://localhost:8080/api/notes', {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({user: userId, _id: noteId})
    })
        .then(res => {
            const { status } = res

            if (status === 201)
                return
            else if (status >= 400 && status < 500)
                return res.json()
                    .then(payload => {
                        const { error: message } = payload

                        throw new Error(message)
                    })
            else if (status >= 500)
                    return res.json()
                    .then(payload => {
                        const { error: message } = payload
                        throw new Error(message)
                    }) 
            else {
                console.log(res, status)
            }
        }
        
    

    )


} */