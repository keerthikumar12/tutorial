import { useContext } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { GoPerson } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import MyContext from '../context/MyContext'; 
import './Header.css'

const Header = () => {
  const {cartCout} = useContext(MyContext)

  return (
    <div className='header-main-card'>
      <Link to="/" className='website-logo-text-card link-element'>
        <img className='website-logo-image' src="https://res.cloudinary.com/dojcy1a17/image/upload/v1729267460/image_55_fnyixb.png" alt="website logo" />
        <p className='chaperone-text'>Chaperone</p>
      </Link>
      <ul className="header-navigation-list">
        <li className="navigation-list-item">Home</li>
        <li className="navigation-list-item current-navigation-item">Plants & Pots <hr className="hr-line" /></li>
        <li className="navigation-list-item navigation-tools-service-card">Tools <IoIosArrowDown className="down-arrow-icon" /></li>
        <li className="navigation-list-item navigation-tools-service-card">Our Services <IoIosArrowDown className="down-arrow-icon" /></li>
        <li className="navigation-list-item">Blog</li>
        <li className="navigation-list-item">Our Story</li>
        <li className="navigation-list-item">FAQs</li>
      </ul>
      <div className="my-profile-cart-card">
        <div className="my-profile-card">
          <GoPerson className="my-profile-icon" />
          <p className="my-profile-text">My Profile</p>
        </div>
        <div className="cart-card">
          <p className="cart-count">{cartCout}</p>
          <button className="cart-button">
            <img className="cart-img" src="https://res.cloudinary.com/dojcy1a17/image/upload/v1729270294/image_2_qvizfl.png" alt="cart-image" />
            <p className="cart-text">Cart</p>
          </button>
        </div>
      </div>
      <div className="search-card">
        <CiSearch className="search-icon" />
        <input className="search-input" type="text" placeholder="Search Plant" />
        <img className="leaf-image" src="https://res.cloudinary.com/dojcy1a17/image/upload/v1729272924/image_91_hu4wrh.png" alt="leaf" />
      </div>
    </div>
  )
}
export default Header