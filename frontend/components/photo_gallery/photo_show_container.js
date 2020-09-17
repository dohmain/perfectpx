import { connect } from 'react-redux';
import PhotoShow from './photo_show';
import { getPhoto, getPhotos } from '../../actions/photo_actions';
import { fetchPhotoComments } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return {
    photo: state.entities.photos,
    user: state.entities.users,
  }
}

const mapDispatchToProps = dispatch => ({
  getPhoto: id => dispatch(getPhoto(id))

})

export default connect(mapStateToProps, mapDispatchToProps)(PhotoShow);