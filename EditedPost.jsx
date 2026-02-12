import { useState } from 'react'

function EditedPost({onSubmit}) {
    const [name, setName] = useState("");
    const [content, setContent] = useState("");
    return(<div id="Post">
        <h3>Your Name: <textarea onChange={e => setName(e.target.value)} value={name}/></h3>
        <p><textarea onChange={e => setContent(e.target.value)} value={content}/></p>
        <button onClick={() => onSubmit({name, content})}>Submit Post</button>
    </div>);
}

export default EditedPost;