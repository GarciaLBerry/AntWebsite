import { useState } from 'react'
import Post from './Components/Post'
import EditedPost from './Components/EditedPost'
import PostList from './Components/PostList'
import './index.css'

function App() {
  const [postList, setPostList] = useState([<Post author={"Jorjor_wel"}
    content={"I like ants"}
    likes={3}
    dislikes={0}/>]);

  const [addingNew, setAddingNew] = useState(false);

  function addToList(toAdd) {
    setPostList([...postList, toAdd]);
    console.log(postList.length);
  }

  function publishEditedPost({name, content}) {
    addToList(<Post author={name} content={content} likes={0} dislikes={0}/>)
    setAddingNew(false);
  }

  function changeSearchOrder(e) {
    setSearchVal(e);
    sortList();
  }
  
  const [searchVal, setSearchVal] = useState('');
  return (
    <>
        <div id = "TopBar">
          <div id="Title">
            <h1>It's the Ant App</h1>
          </div>
        </div>
        <div id="CenterContent">
          <div id = "SecondBar">
            <textarea onChange={e => changeSearchOrder(e.target.value)} value={searchVal}/>
            <button onClick={() => setAddingNew(true)}>Add New</button>
            {addingNew ? <EditedPost onSubmit={publishEditedPost} /> : <></>}
          </div>
          <PostList postList={postList}/>
        </div>
    </>
  )
}

export default App
