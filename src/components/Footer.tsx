import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          {/* Brand Name */}
          <div className="text-2xl font-bold mb-4 md:mb-0">
            Jolli<span className="text-secondary">Place</span>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6 text-sm">
            <a href="#home" className="hover:text-secondary">
              Home
            </a>
            <a href="#menu" className="hover:text-secondary">
              Menu
            </a>
            <a href="#about" className="hover:text-secondary">
              About Us
            </a>
            <a href="#contact" className="hover:text-secondary">
              Contact
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-600 mb-6" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          {/* Contact Information */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p>📍 123 Main Street, Cityville</p>
            <p>📞 +1 (555) 123-4567</p>
            <p>📧 info@restaurant.com</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary hover:bg-secondary-dark transition"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary hover:bg-secondary-dark transition"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary hover:bg-secondary-dark transition"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-sm text-gray-400">
          © 2024 JolliPlace. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
