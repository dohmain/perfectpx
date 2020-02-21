import React from 'react';
import { withRouter } from 'react-router';

class SplashPage extends React.Component {

  render() {
    return (
      <div className='main-content-box splash'>
        <img src={window.splashImageURL} className='splash-image'/>
      </div>
    )
  }
};

export default withRouter(SplashPage);