import { connect } from 'react-redux';
import PhotoGallery from './photo_gallery';

const mapStateToProps = state => ({
  photo: state.entities.users
});

export default connect(mapStateToProps, null)(PhotoGallery)