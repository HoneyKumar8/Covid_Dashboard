import {VscGithubAlt} from 'react-icons/vsc'
import {FiInstagram} from 'react-icons/fi'
import {FaTwitter} from 'react-icons/fa'
import './index.css'

const Footer = () => (
  <footer className="footer">
    <div className="footer-inner">
      <div className="footer-brand">COVID19INDIA</div>
      <p className="footer-text">
        we stand with everyone fighting on the front lines
      </p>
      <div className="social-icons">
        <VscGithubAlt aria-label="github" />
        <FiInstagram aria-label="instagram" />
        <FaTwitter aria-label="twitter" />
      </div>
    </div>
  </footer>
)

export default Footer
