Sure! Here's the `README.md` content for you to copy and paste:

```markdown
# E-commerce Listing Page - ReactJS UI Implementation

## Project Overview
This project implements an E-commerce Listing Page UI based on a provided Figma design. The page displays a grid/list of products, and users can interact with each product through two main actions:
1. **View Product**: Redirects the user to a custom "Thank You" page.
2. **Add to Cart**: Opens a modal where users can view product details and confirm adding the product to their cart.

## Features
- **Header Section**: Contains a search bar and icons for profile and cart.
- **Product List**: Displays a grid of products with product image, name, price, and buttons for viewing and adding to cart.
- **Add to Cart Modal**: Opens upon clicking the "Add to Cart" button, displaying product details and a confirmation button.
- **Pagination**: Allows users to navigate through multiple product listings (functional with mock data).
- **Thank You Page**: Simple acknowledgment page displayed after clicking "View Product".
- **Routing**: Utilizes React Router for navigation between product listing and Thank You pages.

## Technology Stack
- **ReactJS**: Component-based UI development.
- **React Router**: For managing page navigation.
- **React Hooks**: For handling state management.
- **CSS Modules**: For styling and following design guidelines from Figma.
- **Mock Data**: Used to simulate products.

## Folder Structure
```
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── Cart.js
│   │   ├── FilterCard.js
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   ├── Home.js
│   │   ├── Pagination.js
│   │   ├── ProductCard.js
│   │   ├── ThankYouPage.js
│   ├── context
|   |   ├──MyContext.js
│   ├── App.js
│   ├── index.js
│   │   ├── Cart.css
│   │   ├── FilterCard.css
│   │   ├── Footer.css
│   │   ├── Header.css
│   │   ├── Home.css
│   │   ├── Pagination.css
│   │   ├── ProductCard.css
│   │   ├── ThankYouPage.css
├── README.md
└── package.json
```

## Key Components
1. **Header**: Includes a search bar, profile, and cart icons.
2. **ProductCard**: Displays individual product details (image, name, price) along with action buttons for viewing and adding to the cart.
3. **AddToCartModal**: Displays product details and a confirmation button in a modal that appears when "Add to Cart" is clicked.
4. **Pagination**: Controls navigation through product pages.
5. **ThankYou**: Displays a simple message when users click "View Product."

## Routing Structure
- `/`: Displays the Product Listing Page.
- `/thank-you/:productName`: Displays the Thank You page after a user clicks "View Product."

## How to Run the Project
### Prerequisites
Make sure you have the following installed:
- **Node.js** (v14 or later)
- **npm** (or **yarn**)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ecommerce-listing.git
   ```
2. Navigate to the project directory:
   ```bash
   cd plantsecommercepage
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

The app will be available at `http://localhost:3000`.

## Challenges Faced
1. **Modal Implementation**: Ensuring that the modal opened correctly and followed the provided Figma design required careful handling of state and CSS.
2. **Figma to Code Conversion**: Matching the design accurately involved attention to detail with layout, spacing, and hover effects.

## Future Improvements
1. **Backend Integration**: While mock data is used for product listings, future versions could integrate with an API for dynamic data fetching.
2. **Enhanced Search Functionality**: Implementing a more advanced search with filtering options.


