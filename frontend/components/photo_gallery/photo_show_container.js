import { connect } from 'react-redux';
import PhotoShow from './photo_show';
import { getPhoto } from '../../actions/photo_actions';
import { postFollow, unFollow } from '../../actions/follow_actions';

const mapStateToProps = (state) => {
  let followState;
  if (state.entities.follows.followers) {
    followState = Object.values(state.entities.follows.followers).some(follow => follow.follower_id === state.session.id);
  }
  return {
    photo: state.entities.photos,
    user: state.entities.users,
    follows: state.entities.follows,
    comments: state.entities.comments,
    isFollowed: followState,
    session: state.session
  }
}

const mapDispatchToProps = dispatch => ({
  getPhoto: id => dispatch(getPhoto(id)),
  postFollow: (follow) => dispatch(postFollow(follow)),
  unFollow: (follow) => dispatch(unFollow(follow))
})

export default connect(mapStateToProps, mapDispatchToProps)(PhotoShow);