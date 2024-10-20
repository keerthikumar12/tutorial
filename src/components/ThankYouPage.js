// src/components/ThankYouPage.js
import { useNavigate } from 'react-router-dom'
import './ThankYouPage.css'

const ThankYouPage = () => {
  const navigate = useNavigate()

  const onClickContinueBtn = () => {
    navigate('/')
  }

  return (
    <div className='thankyou-card'>
      <p className='thankyou-text'>"Thank you for your interest"</p>
      <button className='thankyou-card-continue-shopping-btn' onClick={onClickContinueBtn}>CONTINUE SHOPPING</button>
      <div className='thankyou-card-image'>
        <img className='party-cone-image' src='https://res.cloudinary.com/dojcy1a17/image/upload/v1729367585/yellow-ice-cream-cone-with-colorful-candies-it_1187092-63178-removebg-preview_pzimyw.png' alt="party cone 1"/>
        <img className='party-cone-image' src="https://res.cloudinary.com/dojcy1a17/image/upload/v1729367690/yellow-ice-cream-cone-with-colorful-candies-it_1187092-63178-removebg-preview_yjfzf3.png" alt="paryt cone 2" />
      </div>
    </div>
  )
}

export default ThankYouPage

