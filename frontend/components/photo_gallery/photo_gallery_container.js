import { connect } from 'react-redux';
import PhotoGallery from './photo_gallery';
import { getPhotos } from '../../actions/photo_actions';
import { withRouter } from 'react-router';

const mapStateToProps = state => {
  return {
    photos: Object.values(state.entities.photos),
    users: state.entities.users
  }
};

const mapDispatchToProps = dispatch => ({
  getPhotos: () => dispatch(getPhotos())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PhotoGallery))