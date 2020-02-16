import { connect } from 'react-redux';
import ProfilePage from './profile_page';

const mapStateToProps = state => ({
  user: state.entities.users[state.session.id],
});

export default connect(mapStateToProps, null)(ProfilePage)