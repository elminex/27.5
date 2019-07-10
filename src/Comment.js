import React from 'react';

const Comment = ({ text, votes, id, thumbUp }) => (
    <li>{text}
        <span>votes: {votes} 
        <button onClick={() => thumbUp(id)}>Thumb Up</button>
        </span>
    </li>
);

export default Comment;
