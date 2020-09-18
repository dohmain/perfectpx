import { connect } from 'react-redux';
import PhotoShow from './photo_show';
import { getPhoto, getPhotos } from '../../actions/photo_actions';
import { fetchPhotoComments } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  debugger;
  return {
    photo: state.entities.photos,
    user: state.entities.users,
    comments: state.entities.comments
  }
}

const mapDispatchToProps = dispatch => ({
  getPhoto: id => dispatch(getPhoto(id))

})

export default connect(mapStateToProps, mapDispatchToProps)(PhotoShow);