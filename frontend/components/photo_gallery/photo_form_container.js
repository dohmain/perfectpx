import { connect } from 'react-redux';
import PhotoForm from './photo_form';
import { postPhoto } from '../../actions/photo_actions'

const mapStateToProps = state => {
  debugger
  return ({
    photo: state.entities.photos,
    currentUserId: state.session.id
  })
}

const mapDispatchToProps = dispatch => ({
  postPhoto: (formData) => dispatch(postPhoto(formData))
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoForm);