import React from 'react';

class SplashPage extends React.Component {

  componentDidMount() {
    this.props.getPhotos()
  }
  render() {
    const splashURL = this.props.photo ? this.props.photo.pxURL : null;
    debugger;
    return (
      <div className='main-content-box splash'>
        <img src={splashURL} className='splash-image'/>
      </div>
    )
  }
};

export default SplashPage;