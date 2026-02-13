import Post from './Post'

function PostList({postList}) {

    return(
        <>
        <div id="ItemsMenu">
            {postList.map((elem) => (
                elem.component
            ))}
        </div>
        </>
    );
}

export default PostList;