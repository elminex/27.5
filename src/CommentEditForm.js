import React from 'react';
import './commentEditForm.css';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { comment: '' };
        this.submitHandle = this.submitHandle.bind(this);
        this.changeHandle = this.changeHandle.bind(this);
    }

    submitHandle(e) {
        const { id, hide, text } = this.props;
        const { comment } = this.state;
        e.preventDefault();
        let message = comment || text;
        this.props.editComment(message, id);
        hide();
        this.setState({ comment: '' });
    }

    changeHandle(e) {
        const message = e.target.value;
        this.setState({ comment: message });
    }

    render() {
        return (
            <form className="edit__container">
                <label className="edit__input-label" htmlFor="message">
                    <input className="edit__input" id="message" onChange={this.changeHandle} value={this.state.comment} name="message" type="text" placeholder="Comment" required />
                </label>
                <button type="submit" onClick={this.submitHandle}>Add comment</button>
            </form>
        )
    }
}

export default CommentForm;

