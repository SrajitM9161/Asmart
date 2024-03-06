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
      <div>
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/google">
                <GoogleLogo />
              </Link>
            </li>
            <li>
              <Link to="/instagram">
                <InstagramLogo />
              </Link>
            </li>
            <li>
              <Link to="/youtube">
                <YouTubeLogo />
              </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/google">
            <h1>Google Page</h1>
          </Route>
          <Route path="/instagram">
            <h1>Instagram Page</h1>
          </Route>
          <Route path="/youtube">
            <h1>YouTube Page</h1>
          </Route>
        </Switch>
      </div>
    </Router>
      </div>
          </div>
    </footer>
  );
}

export default Footer;
