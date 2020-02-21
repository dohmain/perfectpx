import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions'
import TopNav from './top_nav';
import { withRouter } from 'react-router';

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopNav));