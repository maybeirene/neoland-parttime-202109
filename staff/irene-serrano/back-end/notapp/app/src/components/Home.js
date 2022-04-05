import { useState } from 'react'

import Modal from './Modal'
import Nav from './Nav'
import CreateNote from './CreateNote'
import './Home.css'
import Feed from './Feed'

// import Note from './Note';

export default({ onLoggedOut }) => {

    const [modal, setModal] = useState()
    const [refresh, setRefresh] = useState()

    const handleLogout = () => {
        delete sessionStorage.token
        onLoggedOut()
    }

    const handleCloseModal = () => setModal(false)

    const handleOpenModal = () => setModal(true)

    const handleCloseModalAndReloadNotes = () => {
        handleCloseModal()

        setRefresh(true)
    }



    return <div className="Home">
        <Nav onLogout={handleLogout}/>
        
        <div className="Home__title">
            <h2>NOTES</h2>
            <button className="title__button" onClick={handleOpenModal}>+</button>

        </div>
        <Feed refresh={refresh}/>
     

     {modal && <Modal content={
         <CreateNote onCreated={handleCloseModalAndReloadNotes} />
     } onClose={handleCloseModal} /> }
    </div>
}