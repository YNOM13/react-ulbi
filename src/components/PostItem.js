import React from 'react';

const PostItem = ({post,number,onDelete}) => {
  return (
      <div className="post">
        <div className="post__content">
          <strong>
            {number}. {post.title}
          </strong>
          <div>
            {post.body}
          </div>
        </div>
        <div className="post__btn">
          <button onClick={()=>onDelete(post.id)}>Delete</button>
        </div>
      </div>
  );
};

export default PostItem;