import React from "react";

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

function Menu() {
  return (
    <div>
      <h3 className="text-center">Menu</h3>
      <p>ok here we have the search and filters...</p>
      <div>
        <div>
          <h4>Appetizers</h4>
          <ul>
            {Appetizers.map((item, index) => (
              <li key={index} className="menu-item">
                <span className="menu-item-name">{item.name}</span>
                <span className="menu-dots"></span>
                <span className="menu-item-price">
                  ${item.price.toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Main Course</h4>
          <ul>
            {MainCourse.map((item, index) => (
              <li key={index}>
                <p>{item.name}</p>
                <p>${item.price}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Desserts</h4>
          <ul>
            {Desserts.map((item, index) => (
              <li key={index}>
                <p>{item.name}</p>
                <p>${item.price}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Drinks</h4>
          <ul>
            {Drinks.map((item, index) => (
              <li key={index}>
                <p>{item.name}</p>
                <p>${item.price}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Menu;
