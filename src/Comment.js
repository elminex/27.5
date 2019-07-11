import React from 'react';
import CommentEditForm from './CommentEditFormContainer';
import './comment.css';
class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = { editorVisible: false };
        this.editHandle = this.editHandle.bind(this);
        this.hideEdit = this.hideEdit.bind(this);
    }

    editHandle() {
        this.setState({ editorVisible: true });
    }

    hideEdit() {
        this.setState({ editorVisible: false });
    }

    render() {
        const { text, votes, id, thumbUp, thumbDown } = this.props;
        let content;
        if (this.state.editorVisible) {
            content = <CommentEditForm id={id} hide={this.hideEdit} text={text} />
        } else {
            content = <button className="btn btn-edit" onClick={this.editHandle} >Edit Comment</button>
        }

        return (
            <li className="comment">{text}
                <div className="comment__utilities">
                    <span className="comment__votes">votes: {votes}</span>
                    <button className="btn-icon" onClick={() => thumbUp(id)}><i className="fas fa-thumbs-up" /></button>
                    <button className="btn-icon" onClick={() => thumbDown(id)}><i className="fas fa-thumbs-down" /></button>
                    {content}
                </div>
            </li>
        );
    }
}

export default Comment;
