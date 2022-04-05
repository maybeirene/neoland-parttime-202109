import './Note.css'
import './Modal.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Modal from './Modal'
import NoteDetail from './NoteDetail'


export default  ({content}) => {
  console.log(content)

    const [modal, setModal] = useState()

    const handleCloseModal = () => {
        setModal(false)
   

    } 
    const handleOpenModal = () => setModal(true)




   return  <div onClick={handleOpenModal}>
                <li className={`note note__${content.color}`} >
               
                    <p>{content.text}</p>
                    <p>{content.date}</p>

                   {/*  <Routes>
                      <Route path="n/:noteId" element={<Modal content={<h1>hola modal</h1>} onClose={handleCloseModal} />} />
                    </Routes> */}
                </li>

                {modal && <Modal content={
                  <NoteDetail note={content} />
                } onClose={handleCloseModal} /> }
            </div>
}