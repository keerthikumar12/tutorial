// src/components/ProductCard.js
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react'
import MyContext from '../context/MyContext'; 
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Model from 'react-modal'
import { RxCross2 } from "react-icons/rx";
import './ProductCard.css'


// Set the app element for accessibility
Model.setAppElement('#root');

const ProductCard = () => {
  const [isConfirm, setIsConfirm] = useState(false)
  const [visible, setVisible] = useState(false)

  const {currentCartData, updateCurrentCartData, currentProductList, updateCartCount, currentPageNo, increaseCurrentPageNO, decreaseCurrentPageNo} = useContext(MyContext)
  
  const totalPages = 9;
  const isLastPage = currentPageNo >= totalPages;
  const isFirstPage = currentPageNo <= 1;

  const navigate = useNavigate()
  
  const onClickNextBtn = () => {
    increaseCurrentPageNO()
    navigate(`/page/${currentPageNo + 1}`)
  }

  const onClickPrevBtn = () => {
    decreaseCurrentPageNo()
    if (currentPageNo === 2) {
      navigate(`/`)
    }
    else {
      navigate(`/page/${currentPageNo - 1}`)
    }
  }

  const onClickAddToCart = id => {
    updateCurrentCartData(id)
    setVisible(true)
  }

  const onClickXCrossBtn = () => {
    setIsConfirm(false)
    setVisible(false)
  }

  const onClickContinueShoppingBtn = () => {
    setVisible(false)
    setIsConfirm(false)
    navigate(`/`)
  }

  const onClickConfirmBtn = () => {
    updateCartCount()
    setIsConfirm(true)
  }

  const onClickViewBtn = () => {
    navigate('/thankyou')
  }

  const renderProductItemDetails = eachItem => {
    const {id, plantName, imageUrl, description, rating, originalPrice, discountPrice} = eachItem
    
    return (
    <>
      <div className='product-image-view-btn-card'>
        <IoIosHeartEmpty className='heart-icon' />
        <img className='product-item-img' src={imageUrl} alt={`${plantName} ${id}`} />
        <button className='product-view-btn' onClick={onClickViewBtn}>View Product</button>
      </div>
      <div className='product-name-desp-rating-addtocart-card'>
        <p className='product-plant-name'>{plantName}</p>
        <p className='product-desp'>{description}</p>
        <div className='product-rating-card'>
          <img className='product-rating-star-image' src="https://res.cloudinary.com/dojcy1a17/image/upload/v1729327896/image_10_mvielh.png" alt="star" />
          <p className='product-rating'>{rating}</p>
        </div>
        <div className='product-price-card'>
          <p className='product-original-price'>{`₹ ${originalPrice}`}</p>
          <p className='product-discount-price'>{`₹ ${discountPrice}`}</p>
        </div>
        <div className='product-addtocart-buyonrent-card'>
          <button className='product-addtocart-btn' onClick={() => onClickAddToCart(id)}><span className='span-plus-minus-text'>-</span>Add to cart<span className='span-plus-minus-text'>+</span></button>
          <button className='produc-buyonrent-btn'>Buy on Rent</button>
        </div>
      </div>
    </>
  )
}

  const renderProductList = () => (
    <ul className='product-list'>
      {currentProductList.map(eachItem => {
        const {id} = eachItem
        const {plantName, imageUrl, description, rating, originalPrice, discountPrice} = currentCartData

        return (
          <li key={id} className='product-list-item'>
            {renderProductItemDetails(eachItem)}
            <Model isOpen={visible} style={{
              overlay: {
                background: '#7d7c7c33',
              },
              content: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background: 'transparent',
                border: 'none'
              }
            }}>
                {isConfirm ? (
                  <div className='congratulation-card'>
                    <button className='congratulation-card-x-cross-btn' onClick={onClickXCrossBtn}><RxCross2 className='x-cross-icon' /></button>
                    <p className='congratulation-card-your-cart-text'>Your Cart</p>
                    <hr className='congratulation-card-hr-line' />
                    <p className='congratulation-card-order-placed-text'>Congratulations Order Placed!</p>
                    <img className='congratulation-card-flower-pot-image' src="https://res.cloudinary.com/dojcy1a17/image/upload/v1729370492/plant_1_b3tngs.png" alt="flower pot" />
                    <p className='congratulation-card-desp'>Thank you for choosing Chaperone services. We will soon get in touch with you!</p>
                    <button className='congratulation-card-continue-shopping-btn' onClick={onClickContinueShoppingBtn}>CONTINUE SHOPPING</button>
                  </div>
                ) 
                : 
                (
                <div className='product-model-card'>
                  <div className='product-image-view-btn-card product-image-model-card'>
                    <IoIosHeartEmpty className='heart-icon' />
                    <img className='product-item-img' src={imageUrl} alt={`${plantName} ${id}`} />
                  </div>
                  <div className='product-name-desp-rating-addtocart-card product-name-desp-model-card'>
                    <p className='product-plant-name'>{plantName}</p>
                    <p className='product-desp'>{description}</p>
                    <div className='product-rating-card'>
                      <img className='product-rating-star-image' src="https://res.cloudinary.com/dojcy1a17/image/upload/v1729327896/image_10_mvielh.png" alt="star" />
                      <p className='product-rating'>{rating}</p>
                    </div>
                    <div className='product-price-card'>
                      <p className='product-original-price'>{`₹ ${originalPrice}`}</p>
                      <p className='product-discount-price'>{`₹ ${discountPrice}`}</p>
                    </div>
                    <div className='product-addtocart-buyonrent-card'>
                      <button className='product-addtocart-btn product-confirm-btn' onClick={onClickConfirmBtn}>Confirm</button>
                      <button className='produc-buyonrent-btn' onClick={() => setVisible(false)}>Cancel</button>
                    </div>
                  </div>
                </div>
                )}
              </Model>
          </li>
        )
      })}
    </ul>
  )

  const renderProductCard = () => (
    <>
      <div className='product-count-text-sort-next-prev-btn-card'>
        <div className='product-count-sort-btn-card'>
          <p className='product-count-text'>300 products</p>
          <button className='sort-by-btn'>Sort by <IoIosArrowDown className='sort-by-down-arrow' /></button>
        </div>
        <div className='next-prev-btn-card'>
          <button disabled={isFirstPage} className='next-btn' onClick={onClickPrevBtn}>Prev</button>
          <p className='page-count-text'>{currentPageNo}</p>
          <button disabled={isLastPage} className='prev-btn' onClick={onClickNextBtn}>Next</button>
        </div>
      </div>
      {renderProductList()}
      <button className='product-view-more-btn'>View More</button>
    </>
  )


  return (
    <div className='product-card'>
      {renderProductCard()}
    </div>
  )
}

export default ProductCard