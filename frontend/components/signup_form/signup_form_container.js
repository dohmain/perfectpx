import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = ({ errors }) => ({
  formType: 'Sign up',
  formTitle: 'Join perfectpx',
  errors: errors.session,
  viewForm: false,
});

const mapDispatchToProps = (dispatch) => {
  return ({
    action: (user) => dispatch(signup(user))
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);