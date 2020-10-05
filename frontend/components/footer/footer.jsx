import React from 'react';

const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div id='footer-sub-container'>
        <div id='footer-left'>
          <span>&copy; PERFECTpx</span>
        </div>
        <div id='footer-right'>
          <span className="footer-attrib" id='footer-icons'>icons: <a href='https://fontawesome.com/' target='_blank'>fontawesome</a></span>
          <span className="footer-attrib" id='footer-photos'>photos: <a href='https://unsplash.com/' target='_blank'>unsplash</a></span>
        </div>
      </div>
    </div>
  )
}

export default Footer;