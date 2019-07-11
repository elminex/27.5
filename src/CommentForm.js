import React from 'react';
import './commentForm.css';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { comment: '' };
        this.submitHandle = this.submitHandle.bind(this);
        this.changeHandle = this.changeHandle.bind(this);
    }

    submitHandle(e) {
        const { comment } = this.state;
        e.preventDefault();
        if (comment !== '') {
            this.props.addComment(comment);
            this.setState({ comment: '' });
        } else {
            alert("You must write a comment first");
        }

    }

    changeHandle(e) {
        const message = e.target.value;
        this.setState({ comment: message });
    }

    render() {
        return (
            <form className="form__container">
                <label className="form__input-label" htmlFor="message">Dodaj komentarz:</label>
                <input className="form__input" id="message" onChange={this.changeHandle} value={this.state.comment} name="message" type="text" placeholder="Comment" required />
                <button className="form__submit" type="submit" value="submit" onClick={this.submitHandle}>Add comment</button>
            </form>
        )
    }
}

export default CommentForm;
