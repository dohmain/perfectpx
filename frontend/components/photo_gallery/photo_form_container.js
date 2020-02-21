import { connect } from 'react-redux';
import PhotoForm from './photo_form';
import { postPhoto } from '../../actions/photo_actions'
import { withRouter } from 'react-router';

const mapStateToProps = state => {
  return ({
    currentUserId: state.session.id
  })
}

const mapDispatchToProps = dispatch => ({
  postPhoto: (formData) => dispatch(postPhoto(formData))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PhotoForm));