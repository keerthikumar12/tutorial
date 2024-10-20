import React from 'react'

const MyContext = React.createContext({
  nurseryList: [],
  productList: [],
  currentProductList: [],
  updateCurrentProductList: () => {},
  currentPageNo: 1,
  increaseCurrentPageNO: () => {},
  decreaseCurrentPageNo: () => {},
  cartCout: 0,
  updateCartCount: () => {},
  currentCartData: {},
  updateCurrentCartData: () => {},
})

export default MyContext