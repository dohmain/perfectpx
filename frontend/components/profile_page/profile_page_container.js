import { connect } from 'react-redux';
import ProfilePage from './profile_page';
import { fetchUser } from '../../actions/user_actions';
import { getPhotos } from '../../actions/photo_actions';
import { postFollow, unFollow } from '../../actions/follow_actions';

const mapStateToProps = (state, ownProps) => {
  let followState;
  if (state.entities.follows.followers) {
    followState = Object.values(state.entities.follows.followers).some(follow => follow.follower_id === state.session.id);
  }
  return ({
    user: state.entities.users[ownProps.match.params.userId],
    photos: Object.values(state.entities.photos),
    follows: state.entities.follows,
    isFollowed: followState,
    session: state.session
  })
};

const mapDispatchToProps = dispatch => {
  return ({
    getUser: id => dispatch(fetchUser(id)),
    getPhotos: () => dispatch(getPhotos()),
    postFollow: (follow) => dispatch(postFollow(follow)),
    unFollow: (follow) => dispatch(unFollow(follow))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);