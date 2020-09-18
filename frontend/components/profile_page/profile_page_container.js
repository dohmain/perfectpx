import { connect } from 'react-redux';
import ProfilePage from './profile_page';
import { fetchUser } from '../../actions/user_actions';
import { fetchUserPhotos } from '../../reducers/selectors';
import { getPhotos } from '../../actions/photo_actions';
import { postFollow } from '../../actions/follow_actions';

const mapStateToProps = (state, ownProps) => {

  return ({
    user: state.entities.users,
    photos: state.entities.photos,
    session: state.session
  })
};

const mapDispatchToProps = dispatch => {
  return ({
    getUser: id => dispatch(fetchUser(id)),
    getPhotos: () => dispatch(getPhotos()),
    postFollow: (follow) => dispatch(postFollow(follow))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);