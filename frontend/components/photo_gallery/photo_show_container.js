import { connect } from 'react-redux';
import PhotoShow from './photo_show';
import { getPhoto, getPhotos } from '../../actions/photo_actions';
import { fetchPhotoComments } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const photo = state.entities.photos.byId ? state.entities.photos.byId[state.entities.photos.allIds[0]] : {};
  const user = state.entities.users.byId? state.entities.users.byId[photo.creator_id] : {};
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