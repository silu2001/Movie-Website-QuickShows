import React from 'react'

const footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-left">
          <span className="logo-q"><img src="https://quickshow.vercel.app/assets/logo-BHx-5GOD.svg" alt="logo" /></span>
          <p className="description">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <div className="app-buttons">
            <img src="https://quickshow.vercel.app/assets/appStore-6IautTmU.svg" alt="Google Play" />
            <img src="https://quickshow.vercel.app/assets/appStore-6IautTmU.svg" alt="App Store" />
          </div>
        </div>

        {/* Middle Section */}
        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About us</a></li>
            <li><a href="/">Contact us</a></li>
            <li><a href="/">Privacy policy</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-contact">
          <h4>Get in touch</h4>
          <p>+1-234-567-890</p>
          <p>contact@example.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright 2025 ©suresh. All Right Reserved.</p>
      </div>
    </footer>
  )
}

export default footer