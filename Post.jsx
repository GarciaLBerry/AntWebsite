import { useState } from 'react'

function Post({author, content, likes, dislikes}) {
    const [currLikes, setCurrLikes] = useState(likes);
    const [currDisLikes, setCurrDisLikes] = useState(dislikes);
    return(
    <div id="Post">
        <h3>{author}</h3>
        <p>{content}</p>
        <button onClick={() => setCurrLikes(currLikes+ 1)}>Like - {currLikes}</button>
        <button onClick={() => setCurrDisLikes(currDisLikes+ 1)}>Dislike - {currDisLikes}</button>
    </div>);
}

export default Post;