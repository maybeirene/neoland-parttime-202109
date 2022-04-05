import { retrievePublicNotes } from '../logic'
import { useState, useEffect } from 'react'

import Note from './Note'

import './Feed.css'

export default ({refresh}) => {
    const [notes, setNotes] = useState()
 

    const loadNotes = () => {
        try{
            retrievePublicNotes(sessionStorage.token)
                .then(notes=> {
                
                    setNotes(notes)
                } )
                .catch(error => console.error(error.message))
        } catch (error) {
            console.error(error.message)
        }
    }
    useEffect(()=>{
        loadNotes()
    }, [])

    return <div className='Feed'>
            {notes? <ul className='Feed__notes'>

               
                {notes.map(note => 
                    <Note  key={note.id} content={note} />)}
                
                
                </ul> : <p>no notes</p>}
    </div>
}