import { connect } from 'react-redux';
import CommentEditForm from './CommentEditForm';
import { editComment } from './actions';

const mapDispatchToProps = dispatch => (
    {
        editComment: (text, id) => dispatch(editComment(text, id)),
    }
);

export default connect(null, mapDispatchToProps)(CommentEditForm);
