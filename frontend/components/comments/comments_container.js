import { connect } from 'react-redux';
import { postComment, clearErrors, getComments } from '../../actions/comment_actions'
import Comments from './comments';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  debugger;
  return ({
    currentUserId: state.session.id ? state.session.id : null,
    errors: state.entities.errors
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    postComment: (comment) => dispatch(postComment(comment)),
    clearErrors: () => dispatch(clearErrors()),
    getComments: () => dispatch(getComments()),
  })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Comments))