import { connect } from 'react-redux';
import ProfilePage from './profile_page';
import { fetchUser } from '../../actions/user_actions';
import { getPhotos } from '../../actions/photo_actions';
import { postFollow, unFollow } from '../../actions/follow_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    user: state.entities.users[ownProps.match.params.userId],
    photos: Object.values(state.entities.photos),
    follows: state.entities.follows,
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