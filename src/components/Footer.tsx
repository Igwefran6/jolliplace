import "@fortawesome/fontawesome-free/css/all.min.css";
import { MutableRefObject } from "react";
import { motion } from "framer-motion";

interface FooterProps {
  refs: MutableRefObject<HTMLDivElement | null>[];
}

const Footer: React.FC<FooterProps> = ({ refs }) => {
  const handleScroll = (index: number) => {
    const ref = refs[index];
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.footer
      className="bg-primary text-white py-8"
      initial={{ opacity: 0.4 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          {/* Brand Name */}
          <motion.div
            className="text-2xl font-bold mb-4 md:mb-0"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Jolli<span className="text-secondary">Place</span>
          </motion.div>

          {/* Navigation Links */}
          <motion.ul
            className="flex space-x-6 text-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {["Home", "Menu", "About Us", "Contact"].map((item, index) => (
              <li
                key={index}
                className="hover:text-secondary cursor-pointer"
                onClick={() => handleScroll(index)}
              >
                {item}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Divider */}
        <motion.hr
          className="border-gray-600 mb-6"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          viewport={{ once: true }}
        />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          {/* Contact Information */}
          <motion.div
            className="text-center md:text-left mb-4 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p>📍 123 Main Street, Cityville</p>
            <p>📞 +1 (555) 123-4567</p>
            <p>📧 info@jolliplace.com</p>
          </motion.div>

          {/* Social Media Icons */}
          <motion.div
            className="flex space-x-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {["facebook", "twitter", "instagram"].map((platform) => (
              <a
                key={platform}
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary hover:bg-secondary-dark transition"
                aria-label={platform}
              >
                <i className={`fab fa-${platform}`}></i>
              </a>
            ))}
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="mt-6 text-center text-sm text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
        >
          © 2024 JolliPlace. All rights reserved.
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
