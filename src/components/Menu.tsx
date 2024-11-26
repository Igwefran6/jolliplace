import { useState } from "react";

const Menu = () => {
  // Menu data
  const menuItems = [
    {
      id: 1,
      food: "Margherita Pizza",
      description: "Classic cheese and tomato pizza",
      price: 8.99,
      category: "Pizza",
    },
    {
      id: 2,
      food: "Pepperoni Pizza",
      description: "Topped with spicy pepperoni slices",
      price: 10.99,
      category: "Pizza",
    },
    {
      id: 3,
      food: "Caesar Salad",
      description: "Crisp romaine lettuce with Caesar dressing",
      price: 7.99,
      category: "Salad",
    },
    {
      id: 4,
      food: "Greek Salad",
      description: "Feta cheese, olives, and fresh vegetables",
      price: 9.99,
      category: "Salad",
    },
    {
      id: 5,
      food: "Chicken Alfredo",
      description: "Pasta in a creamy Alfredo sauce",
      price: 12.99,
      category: "Pasta",
    },
    {
      id: 6,
      food: "Spaghetti Bolognese",
      description: "Pasta with a rich meat sauce",
      price: 11.99,
      category: "Pasta",
    },
    {
      id: 7,
      food: "Garlic Bread",
      description: "Freshly baked with garlic butter",
      price: 4.99,
      category: "Sides",
    },
    {
      id: 8,
      food: "Tiramisu",
      description: "Classic Italian dessert with coffee and cream",
      price: 6.99,
      category: "Desserts",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique categories
  const categories = [
    "All",
    ...new Set(menuItems.map((item) => item.category)),
  ];

  // Filter menu items by category
  const filteredMenu =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="w-full min-h-screen bg-primary pt-16">
      {" "}
      <div className="p-6 max-w-4xl mx-auto ">
        <h1 className="text-3xl font-bold mb-4 text-center fugaz-one-regular text-secondary">
          Menu
        </h1>
        {/* Category Filter */}
        <div className="mb-6 flex flex-wrap justify-center space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 mb-4 py-2 rounded ${
                selectedCategory === category
                  ? "bg-secondary text-white"
                  : "bg-gray-200 text-gray-800"
              } hover:bg-secondary hover:text-white`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        {/* Menu Items */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {filteredMenu.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg p-4 shadow-md bg-white hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-primary mb-2">
                {item.food}
              </h2>
              <p className="text-gray-600">{item.description}</p>
              <p className="text-lg font-bold text-secondary mt-2">
                ${item.price.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
