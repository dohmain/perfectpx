import { connect } from 'react-redux';
import PhotoShow from './photo_show';
import { getPhoto, getPhotos } from '../../actions/photo_actions';
import { fetchPhotoComments } from '../../reducers/selectors';
import { fetchPhoto } from '../../util/photo_api_util';

const mapStateToProps = (state, ownProps) => {
  const photo = state.entities.photos[ownProps.match.params.photoId] || {};
  const user = state.entities.users[photo.creator_id] || {};
  // const comments = state.entities.comments
  const comments = fetchPhotoComments(state, photo);
  const users = state.entities.users;
  return {
    photo,
    user,
    comments,
    users,
  }
}

const mapDispatchToProps = dispatch => ({
  getPhotos: () => dispatch(getPhotos()),
  getPhoto: id => dispatch(getPhoto(id))

})

export default connect(mapStateToProps, mapDispatchToProps)(PhotoShow);