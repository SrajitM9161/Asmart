import React from 'react';
import '../CSS/Footer.css'
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
function Footer() {
  return (
    <footer>
      <div className="con_foot">
        <div className='con_footer'>
      <h2>AGRISMART</h2>
            
      </div>
      <div className='Icon-css'>
      <GoogleIcon style={{ fontSize: '36px' }} />
      <InstagramIcon style={{ fontSize: '36px' }}/>
      <FacebookIcon style={{ fontSize: '36px' }}/>
      <TwitterIcon style={{ fontSize: '36px' }}/>
      <YouTubeIcon style={{ fontSize: '36px' }}/>
      </div>
      <div className='foottext-css'>
        <p>Home</p>
        <p>News</p>
        <p>About us</p>
        <p>Contact us</p>
        <p>Our Team</p>
      </div>
      <div className='footlast-css'>
        <p>Copyright ©️ 2024, Designed by team Devfriends</p>
      </div>
          </div>
    </footer>
  );
}

export default Footer;
