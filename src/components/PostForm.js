import React, {useCallback, useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({onSave}) => {
  const [post, setPost] = useState({
    body:'',
    title:''
  })
  function addNewPost (e) {
    e.preventDefault()

    if(post.title!=='' && post.body!==''){
      onSave(post)
    }
    setPost((prevState)=>{
      return{
        ...prevState,
        title: '',
        body: '',
      }
    })
  }
  const onChange = useCallback((e) => {
    const {value, name} = e.target
    setPost((prevState)=>{
      return{
        ...prevState,
        [name]:value
      }
    })
  },[])

  return (
    <form onSubmit={addNewPost}>
      <MyInput onChange={onChange} name='title' type="text" placeholder="name of the post" value={post.title}/>
      <MyInput onChange={onChange} name='body' type="text" placeholder="description" value={post.body}/>
      <MyButton>Add</MyButton>
    </form>
  );
};

export default PostForm;