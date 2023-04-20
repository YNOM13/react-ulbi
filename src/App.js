import "./styles/App.css"
import {useCallback, useEffect, useMemo, useState} from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import Loader from "./components/UI/Loader/Loader";
function App() {
  //1.30
  const [posts, setPosts] = useState([
  ])
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(json => {
        setTimeout(()=>{ setPosts(json)
          setLoading(false)},3000)

      })
  },[])

  const [filter, setFilter] = useState({sort:'',query:''})
  const [modal, setModal] = useState(false)

  const getSortedPosts = useCallback(() => {
    if(filter.sort){
      return posts.sort((a,b)=>a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts
  },[filter.sort, posts])

  const sortedPost =  useMemo(()=>{
    console.log('render')
    return getSortedPosts()
  },[getSortedPosts])

  const onSave = (post) => {
      setPosts((prevState)=>{
        return[...prevState,{
          id:Date.now(),
          ...post
        }]
      })
    setModal(false)
  }

  const sortedAndSearchedPost = useMemo(()=>{
    return sortedPost.filter(post => post.title.includes(filter.query))
  },[filter.query, sortedPost])

  const onDelete = useCallback((itemID) => {
    setPosts(prevState => prevState.filter(itemDelete => itemDelete.id !== itemID))
  },[])

  return (
    <div className="App">
      <MyButton style={{margin:'30px 0'}} onClick={()=>setModal(true)}>Create Post</MyButton>
      <MyModal visible={modal} setVisible={setModal}><PostForm onSave={onSave}/></MyModal>
        <hr style={{margin:'10px'}}/>
        <PostFilter filter={filter} setFilter={setFilter}/>
      <PostList loading={loading} posts={sortedAndSearchedPost} onDelete={onDelete} title="List of elements"/>
      {loading && <Loader/>}
    </div>
  );
}

export default App;
