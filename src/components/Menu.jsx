import React from "react";
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

/*
TODO: 
- icons
- alignments
- filters, search

one of the filters gotta be eco-friendly, and have most of them have it or something
then you can hav ethe leaf icons or something to go with it.

*/


function Menu() {
  return (
    <div className="mx-16 my-8">
      <h3 className="text-center">Menu</h3>
      <p className="my-16">ok here we have the search and filters...</p>
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