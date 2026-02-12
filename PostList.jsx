import Post from './Post'

function PostList({postList}) {

    let nextId = 0;
    return(
        <>
        <div id="ItemsMenu">
            {postList.map((elem) => (
                elem
            ))}
        </div>
        </>
    );
}

export default PostList;