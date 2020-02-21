import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
import { withRouter } from 'react-router';

const mapStateToProps = ({errors}) => ({
  formType: 'Log in',
  formTitle: 'Log in to perfectpx',
  errors: errors.session,
});

const mapDispatchToProps = (dispatch) => ({
  action: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));