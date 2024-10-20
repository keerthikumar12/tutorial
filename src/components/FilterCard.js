import { BsPlus } from "react-icons/bs";
import './FilterCard.css'

const FilterCard = () => (
  <div className='filter-card'>
    <div className='filter-clear-all-text-card'>
      <p className='filter-text'>Filter</p>
      <p className='clear-all-text'>CLEAR ALL</p>
    </div>
    <ul className="filter-list">
      <li className="filter-list-item">
        <p className="filter-item-text">Type of Plants</p>
        <BsPlus className="plus-icon" />
      </li>
      <li className="filter-list-item">
        <p className="filter-item-text">Price</p>
        <BsPlus className="plus-icon" />
      </li>
      <li className="filter-list-item">
        <p className="filter-item-text">Nursery</p>
        <BsPlus className="plus-icon" />
      </li>
      <li className="filter-list-item">
        <p className="filter-item-text">Ideal Plants Location</p>
        <BsPlus className="plus-icon" />
      </li>
      <li className="filter-list-item">
        <p className="filter-item-text">Indoor/ Outdoor</p>
        <BsPlus className="plus-icon" />
      </li>
      <li className="filter-list-item">
        <p className="filter-item-text">Maintenance</p>
        <BsPlus className="plus-icon" />
      </li>
      <li className="filter-list-item">
        <p className="filter-item-text">Plant Size</p>
        <BsPlus className="plus-icon" />
      </li>
      <li className="filter-list-item">
        <p className="filter-item-text">Water</p>
        <BsPlus className="plus-icon" />
      </li>
      <li className="filter-list-item">
        <p className="filter-item-text">Color</p>
        <BsPlus className="plus-icon" />
      </li>
      <li className="filter-list-item">
        <p className="filter-item-text">Seasonal</p>
        <BsPlus className="plus-icon" />
      </li>
      <li className="filter-list-item last-filter">
        <p className="filter-item-text">Light Efficient</p>
        <BsPlus className="plus-icon" />
      </li>
    </ul>
  </div>
)

export default FilterCard