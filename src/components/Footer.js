import { FaInstagram , FaFacebook, FaLinkedin, FaYoutube} from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";
import './Footer.css'

const Footer = () => {
  const renderFooterListCard = () => (
    <div className='footer-lists-card'>
      <div className='footer-subscribe-card'>
        <p className='footer-subscribe-heading'>SUBSCRIBE TO OUR NEWSLETTER</p>
        <p className='footer-subscribe-desp'>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necesbus enim</p>
        <input className='footer-subscribe-input' type='text' placeholder='Enter your email address' />
        <button className='footer-subscribe-btn'>SUBSCRIBE</button>
      </div>
      <div className='footer-about-us-card'>
        <p className='footer-lists-headings'>About us</p>
        <ul className='footer-lists'>
            <li className='footer-lists-item'>Our Story</li>
            <li className='footer-lists-item'>Blogs</li>
            <li className='footer-lists-item'>Careers</li>
            <li className='footer-lists-item'>Contact Us</li>
            <li className='footer-lists-item'>Help & Support</li>
        </ul>
      </div>
      <div className='footer-service-card'>
        <p className='footer-lists-headings'>our services</p>
        <ul className='footer-lists'>
            <li className='footer-lists-item'>Book Maali</li>
            <li className='footer-lists-item'>Plant Day Care</li>
            <li className='footer-lists-item'>Rent Plants</li>
            <li className='footer-lists-item'>Plants & Pots</li>
            <li className='footer-lists-item'>Gardening Tools</li>
        </ul>
      </div>
      <div className='footer-useful-links-card'>
        <p className='footer-lists-headings'>useful links</p>
        <ul className='footer-lists'>
            <li className='footer-lists-item'>My Account</li>
            <li className='footer-lists-item'>Orders & Returns</li>
            <li className='footer-lists-item'>Track Order</li>
            <li className='footer-lists-item'>Terms & Conditions</li>
            <li className='footer-lists-item'>Privacy Policy</li>
            <li className='footer-lists-item'>Return, Refund & Replacement Policy</li>
        </ul>
      </div>
      <div className='footer-get-in-touch-card'>
        <p className='footer-lists-headings'>GET IN TOUCH</p>
        <ul className='footer-lists'>
            <li className='footer-lists-item'>Address: F-262, First Floor, Sushant Lok Phase-III, Sector-57, Gurgaon, Haryana, India 122003</li>
            <li className='footer-lists-item'>Call:<br></br>+919958287272</li>
            <li className='footer-lists-item'>Email: care@chaperoneplants.com</li>
        </ul>
      </div>
  </div>
  )

  return (
    <div className='footer-card'>
      {renderFooterListCard()}
      <div className='footer-plantspage-heading-desp-follow-us-card'>
        <p className='footer-plantspage-heading'>CHAPERONE</p>
        <p className='footer-plantspage-desp'>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos accusantium a numquam autem ab rerum omnis. Non molestiae ratione et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius. Et architecto nihil id labore omnis hic iste deleniti et porro aspernatur.</p>
        <div className='footer-follow-us-card'>
          <p className='footer-follow-us-text'>Follow us on</p>
          <div className='footer-follow-us-icons-card'>
            <FaInstagram className="footer-instagram-icon" />
            <FaFacebook className="footer-facebook-icon" />
            <FaSquareThreads className="footer-threads-icon" />
            <FaYoutube className="footer-youtube-icon" />
            <FaLinkedin className="footer-linkedin-icon" />
          </div>
        </div>
      </div>
      <hr className="footer-hr-line" />
      <p className="footer-all-right-reserved-text">© 2023, chaperone.com All rights reserved.</p>
    </div>
  )
}

export default Footer