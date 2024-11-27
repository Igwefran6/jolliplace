import { motion } from "framer-motion";
import { useState } from "react";

const Menu = () => {
  // Menu data
  const menuItems = [
    {
      id: 1,
      food: "Jollof Rice",
      description: "Fried rice with a rich tomato sauce and spices",
      price: 5000, // ₦5000
      category: "Rice",
    },
    {
      id: 2,
      food: "Fried Rice",
      description: "Rice cooked with vegetables and spices",
      price: 5500, // ₦5500
      category: "Rice",
    },
    {
      id: 3,
      food: "Pounded Yam & Egusi Soup",
      description: "Pounded yam served with melon seed soup",
      price: 8000, // ₦8000
      category: "Swallow & Soup",
    },
    {
      id: 4,
      food: "Efo Riro",
      description: "Spinach stew with meat or fish",
      price: 7000, // ₦7000
      category: "Soup",
    },
    {
      id: 5,
      food: "Ogbono Soup",
      description: "Soup made from wild mango seeds and meats",
      price: 7500, // ₦7500
      category: "Soup",
    },
    {
      id: 6,
      food: "Pepper Soup",
      description: "Spicy broth with meat or fish",
      price: 6000, // ₦6000
      category: "Soup",
    },
    {
      id: 7,
      food: "Suya",
      description: "Spicy grilled meat skewer, typically served with onions",
      price: 3000, // ₦3000
      category: "Appetizer",
    },
    {
      id: 8,
      food: "Moi Moi",
      description: "Steamed bean pudding with spices",
      price: 2500, // ₦2500
      category: "Appetizer",
    },
    {
      id: 9,
      food: "Asun",
      description: "Spicy grilled goat meat, popular as a street food",
      price: 3500, // ₦3500
      category: "Appetizer",
    },
    {
      id: 10,
      food: "Eba & Ogbono Soup",
      description: "Cassava flour dough served with wild mango seed soup",
      price: 8500, // ₦8500
      category: "Swallow & Soup",
    },
    {
      id: 11,
      food: "Bitterleaf Soup",
      description: "Soup made from bitterleaf, vegetables, and meats",
      price: 9000, // ₦9000
      category: "Soup",
    },
    {
      id: 12,
      food: "Gizdodo",
      description: "A mixture of gizzard and plantain cooked in spicy sauce",
      price: 4500, // ₦4500
      category: "Side Dish",
    },
    {
      id: 13,
      food: "Akara",
      description: "Fried bean cakes, often eaten as breakfast",
      price: 3000, // ₦3000
      category: "Snack",
    },
    {
      id: 14,
      food: "Nkwobi",
      description:
        "Cow foot cooked in a spicy sauce, a popular Nigerian delicacy",
      price: 7500, // ₦7500
      category: "Appetizer",
    },
    {
      id: 15,
      food: "Ofada Rice & Ayamase",
      description:
        "Special Nigerian rice served with green pepper sauce and meats",
      price: 9500, // ₦9500
      category: "Rice",
    },
    {
      id: 16,
      food: "Boli",
      description: "Grilled plantain served with groundnut or pepper sauce",
      price: 3500, // ₦3500
      category: "Snack",
    },
    {
      id: 17,
      food: "Nigerian Pancakes",
      description: "Sweet or savory pancakes, a popular breakfast dish",
      price: 2000, // ₦2000
      category: "Breakfast",
    },
    {
      id: 18,
      food: "Jollof Rice & Grilled Chicken",
      description: "Jollof rice served with grilled chicken",
      price: 10000, // ₦10000
      category: "Rice",
    },
    {
      id: 19,
      food: "Yam Porridge",
      description: "Yams cooked with tomatoes, pepper, and spinach",
      price: 5500, // ₦5500
      category: "Vegetarian",
    },
    {
      id: 20,
      food: "Pounded Yam & Nsala Soup",
      description: "Pounded yam served with white soup made from catfish",
      price: 10500, // ₦10500
      category: "Swallow & Soup",
    },
    {
      id: 21,
      food: "Okra Soup",
      description: "Okra cooked with meat or fish, served with swallow",
      price: 7500, // ₦7500
      category: "Soup",
    },
    {
      id: 22,
      food: "Fried Plantain",
      description: "Ripe plantains fried to a crisp golden perfection",
      price: 2500, // ₦2500
      category: "Side Dish",
    },
    {
      id: 23,
      food: "Catfish Peppersoup",
      description: "Spicy catfish cooked in a flavorful broth",
      price: 8000, // ₦8000
      category: "Soup",
    },
    {
      id: 24,
      food: "Nkwobi & Ugba",
      description: "Cow foot dish with oil bean salad",
      price: 7000, // ₦7000
      category: "Appetizer",
    },
    {
      id: 25,
      food: "Coconut Rice",
      description: "Rice cooked with coconut milk and spices",
      price: 6000, // ₦6000
      category: "Rice",
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
    <div className="w-full min-h-screen bg-primary pt-16 z-0">
      <div className="p-6 max-w-4xl mx-auto">
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
            <motion.div
              key={item.id}
              className="border rounded-lg p-4 shadow-md bg-white hover:shadow-lg transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl font-semibold text-primary mb-2">
                {item.food}
              </h2>
              <p className="text-gray-600">{item.description}</p>
              <p className="text-lg font-bold text-secondary mt-2">
                ₦{item.price.toFixed(2)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
