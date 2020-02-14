import { connect } from 'react-redux';
import { signup, login, clearErrors } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = ({ errors }) => ({
  formType: 'Sign up',
  formTitle: 'Join perfectpx',
  errors: errors.session,
  viewForm: false,
});

const mapDispatchToProps = (dispatch) => {
  return ({
    action: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);