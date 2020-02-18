import { connect } from 'react-redux';
import PhotoForm from './photo_form';
import { postPhoto } from '../../util/photo_api_util'

const mapStateToProps = state => {
  return ({
    currentUserId: state.session.id
  })
}

const mapDispatchToProps = dispatch => ({
  postPhoto: (formData) => dispatch(postPhoto(formData))
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoForm);