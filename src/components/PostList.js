import React from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = React.memo(({posts,title,onDelete, loading}) => {
  console.log(loading)
  if(posts.length > 0){
    return (
      <div>
        <h1 style={{textAlign:'center',fontFamily:'"Calibri",sans-serif'}}>{title}</h1>
        <TransitionGroup>
          {posts.map((post, indexPost) => {
            return <CSSTransition classNames="post" timeout={500} key={post.id} >
                    <PostItem onDelete={onDelete} number={indexPost + 1} post={post}/>
            </CSSTransition>
          })}
        </TransitionGroup>
      </div>
    );
  } else if(loading){
    return(<>

      </>
    )
  }
  return (
    <p
      style={{background:'green', padding:'10px', color:'white',
        borderRadius:'4px', margin:'20px', textAlign:'center'}}>
      No todos</p>
  )
})

export default PostList;