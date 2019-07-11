import { connect } from 'react-redux';
import Comment from './Comment';
import { thumbUp, thumbDown, editComment } from './actions';

const mapDispatchToProps = dispatch => (
    {
        thumbUp: id => dispatch(thumbUp(id)),
        thumbDown: id => dispatch(thumbDown(id)),
        editComment: (text, id) => dispatch(editComment(text, id))
    }
);

export default connect(null, mapDispatchToProps)(Comment);
