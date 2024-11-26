import { motion } from "framer-motion";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Navigation from "./components/Navigation";
import React, { useRef } from "react";

const App: React.FC = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const refs = [heroRef, menuRef, contactRef, aboutRef];

  return (
    <div className="overflow-x-hidden selection:bg-secondary-light">
      <Navigation refs={refs} />
      <main>
        <div
          ref={heroRef}
          className="w-screen h-screen bg-slate-500 border-b border-secondary flex flex-col-reverse lg:flex-row "
        >
          <div className="w-full lg:w-1/2 h-1/2 lg:h-full bg-primary flex flex-col justify-center p-12 lg:p-24">
            <>
              <p className="lg:text-2xl text-lg leckerli-one-regular text-secondary">
                Welcome to
              </p>
              <p className="lg:text-8xl text-5xl font-extrabold tracking-tight barriecito-regular">
                <span className="inline-block text-primary-dark text-opacity-90 ">
                  Jolli
                </span>
                <span className="inline-block text-secondary text-opacity-95 ">
                  Place
                </span>
              </p>
              <p className=" lg:text-4xl text-2xl leckerli-one-regular text-secondary">
                Restuarant
              </p>
            </>
            <motion.button
              whileTap={{ translateY: 0.9 }}
              transition={{ duration: 0.15 }}
              className="my-4"
            >
              <span className="px-4 py-2  w-fit text-2xl rounded fugaz-one-regular font-bold text-primary-dark cursor-pointer bg-secondary hover:bg-secondary-dark">
                See Menu
              </span>
            </motion.button>
          </div>

          <div className="w-full lg:w-1/2 h-1/2 lg:h-full bg-slate-700 p-4 bg-[url('./images/food/2.jpg')] bg-no-repeat bg-fixed bg-cover lg:bg-center bg-top"></div>
        </div>
        <div
          ref={menuRef}
          className="w-screen min-h-screen bg-slate-500 border-b border-secondary"
        >
          <Menu />
        </div>
        <div className=" border-b border-secondary" ref={contactRef}>
          <div className="py-16 px-6 bg-white">
            <div className="container mx-auto text-center bg-white">
              <h3 className="text-3xl  font-semibold text-secondary mb-4 fugaz-one-regular">
                Opening Hours
              </h3>
              <ul className="text-lg">
                <li>Mon-Fri: 9:00 AM - 9:00 PM</li>
                <li>Sat: 10:00 AM - 10:00 PM</li>
                <li>Sun: 11:00 AM - 8:00 PM</li>
              </ul>
            </div>
          </div>
          {/* Contact div */}
          <div className="pb-16 px-6 bg-white ">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-bold text-secondary mb-6 fugaz-one-regular">
                Contact Us
              </h2>
              <p className="text-lg text-gray-700 max-w-xl mx-auto mb-6">
                Have questions or want to learn more about our restaurant? Feel
                free to reach out!
              </p>
              <div className="text-lg">
                <p className="mb-2">📍 123 Main Street, Cityville</p>
                <p className="mb-2">📞 +1 (555) 123-4567</p>
                <p>📧 info@restaurant.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" border-b border-secondary" ref={aboutRef}>
          {/* Mission div */}
          <div className="py-16 px-6 bg-white">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-bold text-secondary mb-6 fugaz-one-regular">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Our mission is to create a space where food lovers can gather,
                share meals, and enjoy delicious, carefully prepared dishes. We
                believe in using the freshest ingredients and delivering
                exceptional service to all our guests.
              </p>
            </div>
          </div>
          {/* Team div */}
          <div className="py-16 px-6 bg-gray-50">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-secondary text-center mb-8 fugaz-one-regular">
                Meet Our Team
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Team Member 1 */}
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Chef John"
                    className="w-24 h-24 mx-auto rounded-full mb-4"
                  />
                  <h3 className="text-xl font-semibold">Chef John</h3>
                  <p className="text-gray-600">Head Chef</p>
                </div>
                {/* Team Member 2 */}
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Manager Lisa"
                    className="w-24 h-24 mx-auto rounded-full mb-4"
                  />
                  <h3 className="text-xl font-semibold">Lisa Smith</h3>
                  <p className="text-gray-600">General Manager</p>
                </div>
                {/* Team Member 3 */}
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Pastry Chef Ana"
                    className="w-24 h-24 mx-auto rounded-full mb-4"
                  />
                  <h3 className="text-xl font-semibold">Ana Lee</h3>
                  <p className="text-gray-600">Pastry Chef</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
