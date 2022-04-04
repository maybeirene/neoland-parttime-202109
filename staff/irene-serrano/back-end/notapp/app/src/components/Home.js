import { useEffect, useState } from 'react'
import { retrievePublicNotes } from '../logic'

import Modal from './Modal'
import CreateNote from './CreateNote'
import './Home.css'

// import Note from './Note';

export default({ onLoggedOut }) => {
    const [notes, setNotes] = useState()
    const [modal, setModal] = useState()

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

    const handleLogout = () => {
        delete sessionStorage.token
        onLoggedOut()
    }

    const handleCloseModal = () => setModal(false)

    const handleOpenModal = () => setModal(true)

    const handleCloseModalAndReloadNotes = () => {
        handleCloseModal()

        loadNotes()
    }

    return <div className="Home">
        <button onClick={handleLogout}>Logout</button>
        
        <div className="Home__title">
            <h2>NOTES</h2>
            <button className="title__button" onClick={handleOpenModal}>+</button>

        </div>
        
     {notes? <ul>
        {notes.map(note => 
        <li className="note"
        style={{backgroundColor: note.color}} 
        key={note.id}>
            {note.text}
            </li>)}

      {/*    {notes.map( note => {
             
             return <Note key={note.id}  showText={()=>console.log(note.text)} /> 
         })} */}
     </ul> : <p>no notes</p>
     }

     {modal && <Modal content={
         <CreateNote onCreated={handleCloseModalAndReloadNotes} />
     } onClose={handleCloseModal} /> }
    </div>
}