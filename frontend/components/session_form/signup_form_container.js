import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => ({
  formType: 'Sign up',
  formTitle: 'Join perfectpx'
});

const mapDispatchToProps = (dispatch) => ({
  action: (user) => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);