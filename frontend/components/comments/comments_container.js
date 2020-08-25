import { connect } from 'react-redux';
import { postComment, clearErrors } from '../../actions/comment_actions'
import Comments from './comments';
import { withRouter } from 'react-router';
// import { fetchPhotoComments } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  // const photo = state.entities.users[ownProps.match.params.photoId] || {}
  return ({
    currentUserId: state.session.id,
    photo: state.entities.photos[ownProps.match.params.photoId],
    errors: state.entities.errors
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    postComment: (comment) => dispatch(postComment(comment)),
    clearErrors: () => dispatch(clearErrors())
  })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Comments))