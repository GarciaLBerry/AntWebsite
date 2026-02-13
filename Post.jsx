import { useState } from 'react'

function Post({author, content, likes, dislikes, likePost, dislikePost}) {
    const [currLikes, setCurrLikes] = useState(likes);
    const [currDisLikes, setCurrDisLikes] = useState(dislikes);

    function like() {
        setCurrLikes(currLikes+ 1);
        likePost();
    }

    function dislike() {
        setCurrDisLikes(currDisLikes+ 1);
        dislikePost();
    }

    return(
    <div id="Post">
        <h3>{author}</h3>
        <p>{content}</p>
        <button onClick={like}>Like - {currLikes}</button>
        <button onClick={dislike}>Dislike - {currDisLikes}</button>
    </div>);
}

export default Post;