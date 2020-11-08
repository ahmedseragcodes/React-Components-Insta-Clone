import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;

  return (
    <div>
      {comments.map(function(item){
        return <Comment comments={comments} comment={item} />
      })}
    </div>
  );
};

export default Comments;
