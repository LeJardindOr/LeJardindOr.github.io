import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppetizersImg from "../assets/images/HomeFood2.jpg";
import MainCourseImg from "../assets/images/HomeFood1.jpg";
import DessertsImg from "../assets/images/HomeFood9.jpg";
import DrinksImg from "../assets/images/HomeFood6.jpg";


const Appetizers = [
  {
    name: "Garden Salad",
    price: 5.99,
    vegan: true,
    vegetarian: true,
  },
  {
    name: "Bruschetta",
    price: 6.99,
    vegetarian: true,
    gluten: true,
    dairy: true,
  },
  {
    name: "Nachos",
    price: 8.99,
    vegetarian: true,
    dairy: true,
  },
  {
    name: "Spinach Artichoke Dip",
    price: 7.99,
    vegetarian: true,
    gluten: true,
    dairy: true,
  },
  {
    name: "Stuffed Jalapeños",
    price: 9.49,
    vegetarian: true,
    dairy: true,
  },
  {
    name: "Hummus Platter",
    price: 10.99,
    vegan: true,
    vegetarian: true,
    nuts: true,
  },
  {
    name: "Sweet Potato Fries",
    price: 6.99,
    vegan: true,
    vegetarian: true,
  },
];

const MainCourse = [
  {
    name: "Veggie Burger",
    price: 9.99,
    vegan: true,
    vegetarian: true,
    gluten: true,
  },
  {
    name: "Grilled Salmon",
    price: 15.99,
  },
  {
    name: "Chicken Curry",
    price: 12.99,
    gluten: true,
  },
  {
    name: "Quinoa Salad",
    price: 11.99,
    vegan: true,
    vegetarian: true,
    nuts: true,
  },
  {
    name: "Beef Stroganoff",
    price: 14.99,
    dairy: true,
  },
  {
    name: "Pasta Primavera",
    price: 13.99,
    vegetarian: true,
    gluten: true,
    dairy: true,
  },
  {
    name: "Mushroom Risotto",
    price: 12.99,
    vegetarian: true,
    dairy: true,
  },
  {
    name: "Lamb Kebabs",
    price: 16.99,
  },
  {
    name: "Tofu Stir-Fry",
    price: 11.99,
    vegan: true,
    vegetarian: true,
    soy: true,
  },
];

const Desserts = [
  {
    name: "Chocolate Cake",
    price: 6.99,
    vegetarian: true,
    gluten: true,
    dairy: true,
  },
  {
    name: "Fruit Sorbet",
    price: 5.99,
    vegan: true,
    vegetarian: true,
  },
  {
    name: "Apple Pie",
    price: 7.99,
    vegetarian: true,
    nuts: true,
    gluten: true,
    dairy: true,
  },
  {
    name: "Lemon Cheesecake",
    price: 8.99,
    vegetarian: true,
    gluten: true,
    dairy: true,
  },
  {
    name: "Vegan Brownie",
    price: 6.99,
    vegan: true,
    vegetarian: true,
  },
];

const Drinks = [
  {
    name: "Mineral Water",
    price: 1.99,
    vegan: true,
    vegetarian: true,
  },
  {
    name: "Organic Red Wine",
    price: 7.99,
    vegan: true,
    vegetarian: true,
  },
  {
    name: "Almond Milk Latte",
    price: 4.99,
    vegan: true,
    vegetarian: true,
    gluten: true,
    nuts: true,
  },
  {
    name: "Green Tea",
    price: 2.99,
    vegan: true,
    vegetarian: true,
  },
  {
    name: "Craft IPA",
    price: 5.99,
    vegetarian: true,
    gluten: true,
    dairy: true,
  },
  {
    name: "Cold Brew Coffee",
    price: 3.99,
    vegan: true,
    vegetarian: true,
  },
];

const Filters = [
  "Nuts", "Dairy", 'Eggs', "Soy", "Shellfish", "Gluten", "Vegan", "Vegetarian", "Eco-Friendly", "Non-GMO"
];


function Menu() {
  const [searchQuery, setSearchQuery] = useState('');
  // Initialize filters state with all filters set to false
  const [filterStates, setFilterStates] = useState(
    Filters.reduce((acc, filter) => ({ ...acc, [filter]: false }), {})
  );

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterChange = (event) => {
    const { name, checked } = event.target;
    setFilterStates(prev => ({ ...prev, [name]: checked }));
  };


  return (
    <div className="mx-16 my-8">
      <h3 className="text-center">Menu</h3>
      <div className="py-16">
        <div className="flex justify-center items-center mt-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search menu items..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="border-2 border-gray-300 bg-white h-10 pl-10 pr-16 rounded-lg text-sm focus:outline-none"
            />
            <svg className="w-4 h-4 absolute left-3 top-3" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>
        <div className="flex flex-wrap mt-4">
          {Filters.map(filter => (
            <label key={filter} className="flex items-center mr-4 mb-2">
              <input
                type="checkbox"
                name={filter}
                checked={filterStates[filter]}
                onChange={handleFilterChange}
                className="mr-2"
              /> {filter}
            </label>
          ))}
        </div>
      </div>
      <div>
        <div className="section-container">
          <img src={AppetizersImg} alt="Appetizers" className="section-image rounded-lg mb-4"/>
          <h4 className="section-title">Appetizers</h4>
          <ul>
            {Appetizers.map((item, index) => (
              <li key={index} className="menu-item">
                <div className="menu-item-content">
                  <span className="menu-item-name pr-2">{item.name}</span>
                  {item.ecoFriendly && <span className="eco-friendly-icon">🍃</span>}
                  <span className="menu-item-price pl-2">${item.price.toFixed(2)}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="section-container">
          <img src={MainCourseImg} alt="Main Course" className="section-image rounded-lg my-4"/>
          <h4 className="section-title">Main Course</h4>
          <ul>
            {MainCourse.map((item, index) => (
              <li key={index} className="menu-item">
                <div className="menu-item-content">
                  <span className="menu-item-name pr-2">{item.name}</span>
                  {item.ecoFriendly && <span className="eco-friendly-icon">🍃</span>}
                  <span className="menu-item-price pl-2">${item.price.toFixed(2)}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="section-container">
          <img src={DessertsImg} alt="Desserts" className="section-image rounded-lg my-4"/>
          <h4 className="section-title">Desserts</h4>
          <ul>
            {Desserts.map((item, index) => (
              <li key={index} className="menu-item">
                <div className="menu-item-content">
                  <span className="menu-item-name pr-2">{item.name}</span>
                  {item.ecoFriendly && <span className="eco-friendly-icon">🍃</span>}
                  <span className="menu-item-price pl-2">${item.price.toFixed(2)}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="section-container">
          <img src={DrinksImg} alt="Drinks" className="section-image rounded-lg my-4"/>
          <h4 className="section-title">Drinks</h4>
          <ul>
            {Drinks.map((item, index) => (
              <li key={index} className="menu-item">
                <div className="menu-item-content">
                  <span className="menu-item-name pr-2">{item.name}</span>
                  {item.ecoFriendly && <span className="eco-friendly-icon">🍃</span>}
                  <span className="menu-item-price pl-2">${item.price.toFixed(2)}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-center">
        <Link to="/reserve">
          <button className="bg-dark-green hover:bg-light-green text-white py-3 px-16 mt-8 rounded-lg transition duration-200 ease-in-out">
            Book a Reservation
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Menu;