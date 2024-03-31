import React from 'react';
import '../CSS/Footer.css'
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <footer>
      <div className="con_foot">
        <div className='con_footer'>
          <h3>AGRISMART</h3>
        </div>
        <div className='Icon-css'>
          <GoogleIcon style={{ fontSize: '36px' }} className='footer-icons' />
          <InstagramIcon style={{ fontSize: '36px' }} className='footer-icons' />
          <FacebookIcon style={{ fontSize: '36px' }} className='footer-icons' />
          <TwitterIcon style={{ fontSize: '36px' }} className='footer-icons' />
          <YouTubeIcon style={{ fontSize: '36px' }} className='footer-icons' />
        </div>
        <div className='footmenu-css'>
          <div className="right-nav">

            <div className='menu'>
              <Link to="/">Home</Link>
              <Link to="/trade">Trade</Link>
              <Link to="/price">Price</Link>
              <Link to="/cropDetection">Crop Detction</Link>
              {/* <Link>Contact us</Link>
              <Link>Our Team</Link> */}
            </div>
          </div>
        </div>
        <div className='footlast-css'>
          <p>Copyright ©️ 2024, Designed by team Devfriends</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
