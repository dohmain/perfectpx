import React from 'react';

class SplashPage extends React.Component {

  render() {
    return (
      <div className='main-content-box splash'>
        <img src={window.splashImageURL} className='splash-image'/>
      </div>
    )
  }
};

export default SplashPage;