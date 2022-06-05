
import {validators } from 'commons'
const {validateEmail, validateString, validatePassword} = validators

function registerCompany(name, email, password, description, location, link){

    validateEmail(email)
    validatePassword(password) 
    validateString(name, 'name')
    validateString(description, 'description')
    if(location) validateString(location, 'location')
    if(link) validateString(link, 'link')
  

    return fetch('http://localhost:8080/api/company', {
    method: 'POST',
    headers: {
            'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password, description, location, link})
    })
        .then(res=> {
            const {status} = res

            if(status === 201){
                return
            } else if(status >= 400 && status < 500){
                throw new Error(res.statusText)
            } else if (status >= 500) throw new Error('server error')

        })
}
export default registerCompany