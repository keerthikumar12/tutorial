import { useContext } from 'react'
import Header from './Header'
import FilterCard from './FilterCard'
import ProductCard from './ProductCard'
import Footer from './Footer'
import MyContext from '../context/MyContext'; 
import { MdOutlineChevronRight } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import './Home.css'





const Home = () => {
  const {nurseryList} = useContext(MyContext)

  const renderPlantsPostBtnDespCard = () => (
    <div className='plants-post-btn-desp-card'>
      <div className='plants-post-btn-card'>
        <button className='platns-btn'>Plants</button>
        <button className='post-btn'>Pots</button>
      </div>
      <p className='desp-text'>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos accusantium a numquam autem ab rerum omnis. Non molestiae ratione et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius. Et architecto nihil id labore omnis hic iste deleniti et porro aspernatur.</p>
    </div>
  )

  const renderNurseryList = () => (
    <div className='nursery-card'>
      <p className='nursery-text'>Nursery</p>
      <ul className='nursery-list'>
        {nurseryList.map(eachItem => {
          const {id, imageUrl, name} = eachItem

          return (
          <li className='nursery-list-item' key={id}>
            <img className='nursery-image' src={imageUrl} alt={`nursery ${id}`} />
            <p className='nursery-item-name'>{name}</p>
          </li>)
        })}
      </ul>
      <div className='right-up-arrow-card'>
        <div className='right-arrow-card'>
          <MdOutlineChevronRight className='right-up-arrow' />
        </div>
        <img className='whatsapp-image' src="https://res.cloudinary.com/dojcy1a17/image/upload/v1729319032/4a3ddcf4f506527db0537770999b4c97_xlvzrk.png" alt="whatsapp" />
        <div className='up-arrow-card'>
          <MdOutlineKeyboardArrowUp className='right-up-arrow' />
        </div>
      </div>
    </div>
  )

  return (
    <div className='home-container'>
      <div className='home-offer-call-card'>
        <p className='free-shipping-text'>Free Shipping on orders above 999/-</p>
        <p className='call-us-text'>Call us on: +91 98768 05120</p>
      </div>
      <Header />
      {renderPlantsPostBtnDespCard()}
      {renderNurseryList()}
      <div className='filter-product-card'>
        <FilterCard />
        <ProductCard />
      </div>
      <Footer />
    </div>
  )
}

export default Home