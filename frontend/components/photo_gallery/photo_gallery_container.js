import { connect } from 'react-redux';
import PhotoGallery from './photo_gallery';
import { getPhotos } from '../../actions/photo_actions';

const mapStateToProps = state => {
  const photos = state.entities.photos.allIds ? state.entities.photos.allIds.map(id => state.entities.photos[id]) : null;
  return {
    photos,
    users: state.entities.users
  }
};

const mapDispatchToProps = dispatch => ({
  getPhotos: () => dispatch(getPhotos())
})

export default connect(mapStateToProps, mapDispatchToProps)(PhotoGallery)