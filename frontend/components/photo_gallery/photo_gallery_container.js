import { connect } from 'react-redux';
import PhotoGallery from './photo_gallery';
import { getPhotos } from '../../actions/photo_actions';

const mapStateToProps = state => {
  return {
    photos: state.entities.photos,
  }
};

const mapDispatchToProps = dispatch => ({
  getPhotos: () => dispatch(getPhotos())
})

export default connect(mapStateToProps, mapDispatchToProps)(PhotoGallery)