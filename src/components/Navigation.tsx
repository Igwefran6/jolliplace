import { motion } from "framer-motion";
import { MutableRefObject, useState } from "react";

interface NavigationProps {
  refs: MutableRefObject<HTMLDivElement | null>[];
}

const Navigation: React.FC<NavigationProps> = ({ refs }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu open/close
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // Handle navigation and scrolling
  const handleNav = (index: number) => {
    toggleMenu(); // Close the menu after selecting a section
    const ref = refs[index];
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="z-40">
      {/* Logo */}
      <span className="fixed right-1/2 translate-x-1/2 top-4 py-2 px-4 bg-neutral-light bg-opacity-50 backdrop-blur-sm rounded-lg shadow-md text-xl barriecito-regular">
        <span className="text-primary">Jolli</span>
        <span className="text-secondary">Place</span>
      </span>

      {/* Navigation */}
      <div className="fixed right-12 translate-x-1/2 top-4 py-2 px-4 bg-neutral-light bg-opacity-50 backdrop-blur-sm rounded-lg shadow-md z-50">
        <i
          className={`cursor-pointer fa-solid fa-${
            isMenuOpen ? "times" : "bars"
          }`}
          onClick={toggleMenu}
        ></i>

        <motion.nav
          initial={{ width: 0, height: 0 }}
          animate={{
            width: isMenuOpen ? 200 : 0,
            height: isMenuOpen ? 200 : 0,
          }}
          className="overflow-hidden fugaz-one-regular flex items-center text-gray-900"
        >
          <ul className="space-y-2">
            {["Home", "Menu", "Contact", "About Us"].map((item, index) => (
              <motion.li
                key={item}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="cursor-pointer hover:text-secondary"
                onClick={() => handleNav(index)}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      </div>
    </div>
  );
};

export default Navigation;
