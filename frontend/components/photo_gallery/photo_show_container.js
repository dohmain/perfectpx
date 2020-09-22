import { connect } from 'react-redux';
import PhotoShow from './photo_show';
import { getPhoto } from '../../actions/photo_actions';
import { postFollow, unFollow } from '../../actions/follow_actions';

const mapStateToProps = (state) => {
  return {
    photo: state.entities.photos,
    user: state.entities.users,
    follows: state.entities.follows,
    comments: state.entities.comments,
    session: state.session
  }
}

const mapDispatchToProps = dispatch => ({
  getPhoto: id => dispatch(getPhoto(id)),
  postFollow: (follow) => dispatch(postFollow(follow)),
  unFollow: (follow) => dispatch(unFollow(follow))
})

export default connect(mapStateToProps, mapDispatchToProps)(PhotoShow);