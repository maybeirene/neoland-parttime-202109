import './Feedback.css'
import { useEffect } from 'react'

export default ({ level, message, onTimeout }) => {
    useEffect(() => {
        setTimeout(onTimeout, 2000)
    }, [])
    if (message === "email is empty or blank"){message = "Ups! Write an e-mail"}

    if(message === "password is empty or blank"){message = "Ups! Write the password"}

    if(message === "password length is smaller than 8 characters"){message = "Wrong password! Password must have at least 8 characters"}

    if(message === "updated user"){message = "Updated user"}

    if(message === "description is empty or blank"){message = "Don't be shy, write something about you"}

    if(message === "name is empty or blank"){message = "Ups! Don't be shy, tell us your name"}

    if(message=== "user does not exist"){message = "We cannot find this user..."}
    return <div className={`Feedback Feedback--${level}`}>{message}</div>
}