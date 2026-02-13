import { useState } from 'react'
import Post from './Components/Post'
import EditedPost from './Components/EditedPost'
import PostList from './Components/PostList'
import './index.css'
let nextId = 1;

function App() {

  const [addingNew, setAddingNew] = useState(false);
  const [searchVal, setSearchVal] = useState('');

  const [postList, setPostList] = useState([
    {
    component: 
    <Post author={"Jorjor_wel"}
    content={"I like ants"}
    likes={3}
    dislikes={0}
    likePost={()=>likePost(0)}
    dislikePost={()=>dislikePost(0)}
    key={0}
    />,
    author: "Jorjor_wel",
    content: "I like ants",
    likes: 3,
    dislikes: 0,
    id: 0
    }
  ]);

  function likePost(id) {
    setPostList(previtems => previtems.map(item => (item.id === id ? {...item, likes: item.likes+1} : item)));
  }

  function dislikePost(id) {
    setPostList(previtems => previtems.map(item => (item.id === id ? {...item, likes: item.likes+1} : item)));
  }

  function addToList(toAdd) {
    setPostList([...postList, toAdd]);
    console.log(postList.length);
  }

  function publishEditedPost({name, content}) {
    const toAdd = 
    {
      component: <Post author={name} 
      content={content} likes={0} 
      dislikes={0} key = {nextId}     
      likePost={()=>likePost(nextId)}
      dislikePost={()=>dislikePost(nextId)}/>,
      author: name,
      content: content,
      likes: 0,
      dislikes: 0,
      id: nextId++
    };
    addToList(toAdd)
    setAddingNew(false);
  }

  function changeSearchOrder(e) {
    setSearchVal(e);
    sortList();
  }

  function sortList() {
    setPostList(quickSort(postList, 0, postList.length - 1));
  }

  function quickSort(arr, l, r) {
    if(r - l < 1)
    {
      return arr;
    }
    let pivot = arr[l];
    let lowestRightIndex = r;
    let highestLeftIndex = l;
    for(let i = l + 1; i <= lowestRightIndex; i++)
    {
      if(compareSearchItems(arr[i], pivot) < 0)
      {
        let temp = arr[i];
        arr[i] = arr[lowestRightIndex];
        arr[lowestRightIndex] = temp;
        lowestRightIndex--;
        i--;
      }
      else if (compareSearchItems(arr[i], pivot) > 0)
      {
        let temp = arr[i];
        arr[i] = arr[highestLeftIndex];
        arr[highestLeftIndex] = temp;
        highestLeftIndex++;
      }
    }
    arr = quickSort(arr, l, highestLeftIndex - 1);
    arr = quickSort(arr, lowestRightIndex + 1, r);
    return arr;
  }

  function compareSearchItems(elemOne, elemTwo) {
    if(elemOne.author.indexOf(searchVal) != elemTwo.author.indexOf(searchVal)) {
      if(elemOne.author.indexOf(searchVal) === -1) {
        return -1;
      }
      return 1;
    }
    if(elemOne.content.indexOf(searchVal) != elemTwo.content.indexOf(searchVal)) {
      if(elemOne.content.indexOf(searchVal) === -1) {
        return -1;
      }
      return 1;
    }
    return (elemOne.likes - elemOne.dislikes) - (elemTwo.likes - elemTwo.dislikes);
  }

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
