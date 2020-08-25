import { connect } from 'react-redux';
import ProfilePage from './profile_page';
import { fetchUser } from '../../actions/user_actions';
import { fetchUserPhotos } from '../../reducers/selectors';
import { getPhotos } from '../../actions/photo_actions'

const mapStateToProps = (state, ownProps) => {

  const user = state.entities.users[ownProps.match.params.userId] || {};
  const photos = fetchUserPhotos(state, user);
  return ({
    currentUser: user,
    photos
  })
};

const mapDispatchToProps = dispatch => {
  return ({
    getUser: id => dispatch(fetchUser(id)),
    getPhotos: () => dispatch(getPhotos())
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);