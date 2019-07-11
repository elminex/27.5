import React from 'react';
import Comment from './CommentContainer';
import './commentsList.css';

const CommentsList = ({ comments }) => (
    <ul className="comments-list">
        {comments.map(comment => <Comment key={comment.id} {...comment} />)}
    </ul>
);

export default CommentsList;
