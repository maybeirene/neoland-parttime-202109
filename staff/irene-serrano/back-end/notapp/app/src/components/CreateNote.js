import './CreateNote.css'
import { createNote } from '../logic'

export default ({ onCreated }) => {
    const handleCreateNote = event => {
        event.preventDefault()
      /*  
        const text = event.target.text.value
        const color = event.target.color.value
        const _public = event.target.public.checked
 */
        const { target: {
            text: { value: text },
            color: { value: color },
            public: { checked: _public }
        }} = event
        console.log(sessionStorage.token)
        console.log(text, color, _public)
        try {
            createNote(sessionStorage.token, text, color, _public)
                .then(() => onCreated())
                .catch(error => console.error(error.message))
        } catch(error) {
            alert(error.message)
        }
    }

    return <div className="CreateNote">
        <h3>Create a note</h3>
        
        <form className="CreateNote__form" onSubmit={handleCreateNote}>
            <label htmlFor="text">Your note text:</label>
            <textarea name="text"></textarea>

            <label htmlFor="text">Pick a color:</label>
            <select name="color">
                <option selected disabled >--Choose a color--</option>
                <option value="white">white</option>
                <option value="red">red</option>
                <option value="green">green</option>
                <option value="blue">blue</option>
                <option value="yellow">yellow</option>
                <option value="pink">pink</option>
                <option value="purple">purple</option>
                
            </select>
            
            <label htmlFor="public">public</label>
            <input id="public" type="checkbox" name="public"></input>

            <button>Create</button>
        </form>
    </div>
}