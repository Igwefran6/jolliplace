import { motion } from "framer-motion";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Navigation from "./components/Navigation";
import React, { Suspense, useRef } from "react";
import Loading from "./components/Loading";
import { ImageLoader } from "./utils/ImageLoader";

interface ImageProps {
  src: string;
  alt?: string;
}

const AppToRender: React.FC<ImageProps> = ({ src }) => {
  ImageLoader(src);
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
          className="w-screen h-screen bg-slate-500 border-b-2 border-secondary flex flex-col-reverse lg:flex-row "
        >
          <div className="w-full lg:w-1/2 h-1/2 lg:h-full bg-primary flex flex-col justify-center p-12 lg:p-24">
            <>
              <motion.p
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:text-2xl text-lg leckerli-one-regular text-secondary"
              >
                Welcome to
              </motion.p>
              <p className="lg:text-8xl text-5xl font-extrabold tracking-tight barriecito-regular">
                <motion.span
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="inline-block text-primary-dark text-opacity-90 "
                >
                  Jolli
                </motion.span>
                <motion.span
                  initial={{ x: 200, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="inline-block text-secondary text-opacity-95 "
                >
                  Place
                </motion.span>
              </p>
              <motion.p
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className=" lg:text-4xl text-2xl leckerli-one-regular text-secondary"
              >
                Restuarant
              </motion.p>
            </>
            <motion.button
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="my-4"
              onClick={() =>
                menuRef.current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <span className="px-4 py-2  w-fit text-2xl rounded fugaz-one-regular font-bold text-primary-dark cursor-pointer bg-secondary hover:bg-secondary-dark">
                See Our Menu
              </span>
            </motion.button>
          </div>

          <div
            className="w-full lg:w-1/2 h-1/2 lg:h-full bg-slate-700 p-4 "
            style={{
              background: `url(${src})`,
              backgroundAttachment: "fixed",
              objectFit: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
        <div
          ref={menuRef}
          className="w-screen min-h-screen bg-slate-500 border-b-2 border-secondary"
        >
          <Menu />
        </div>
        <div className="border-b-2 border-secondary" ref={contactRef}>
          <motion.div
            className="py-16 px-6 bg-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="container mx-auto text-center bg-white">
              <h3 className="text-3xl font-semibold text-secondary mb-4 fugaz-one-regular">
                Opening Hours
              </h3>
              <ul className="text-lg">
                <li>Mon-Fri: 9:00 AM - 9:00 PM</li>
                <li>Sat: 10:00 AM - 10:00 PM</li>
                <li>Sun: 11:00 AM - 8:00 PM</li>
              </ul>
            </div>
          </motion.div>
          {/* Contact div */}
          <motion.div
            className="pb-16 px-6 bg-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
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
                <p>📧 info@jolliplace.com</p>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="border-b-2 border-secondary" ref={aboutRef}>
          {/* About div */}
          <motion.div
            className="pt-16 pb-8 px-6 bg-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-bold text-secondary mb-6 fugaz-one-regular">
                About Us
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Provident quia distinctio quibusdam nobis facilis aliquam, autem
                odio. Quos dolore laborum praesentium consequatur accusamus
                soluta quaerat dicta, officiis adipisci ipsa labore?
              </p>
            </div>
          </motion.div>

          {/* Mission div */}
          <motion.div
            className="pb-16 px-6 bg-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-bold text-secondary mb-6 fugaz-one-regular">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Provident quia distinctio quibusdam nobis facilis aliquam, autem
                odio. Quos dolore laborum praesentium consequatur accusamus
                soluta quaerat dicta, officiis adipisci ipsa labore?
              </p>
            </div>
          </motion.div>

          {/* Team div */}
          <motion.div
            className="py-16 px-6 bg-gray-50"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-secondary text-center mb-8 fugaz-one-regular">
                Meet Our Team
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Team Member 1 */}
                <motion.div
                  className="bg-white rounded-lg shadow-lg p-6 text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Chef John"
                    className="w-24 h-24 mx-auto rounded-full mb-4"
                  />
                  <h3 className="text-xl font-semibold">Chef John</h3>
                  <p className="text-gray-600">Head Chef</p>
                </motion.div>
                {/* Team Member 2 */}
                <motion.div
                  className="bg-white rounded-lg shadow-lg p-6 text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Manager Lisa"
                    className="w-24 h-24 mx-auto rounded-full mb-4"
                  />
                  <h3 className="text-xl font-semibold">Lisa Smith</h3>
                  <p className="text-gray-600">General Manager</p>
                </motion.div>
                {/* Team Member 3 */}
                <motion.div
                  className="bg-white rounded-lg shadow-lg p-6 text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Pastry Chef Ana"
                    className="w-24 h-24 mx-auto rounded-full mb-4"
                  />
                  <h3 className="text-xl font-semibold">Ana Lee</h3>
                  <p className="text-gray-600">Pastry Chef</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer refs={refs} />
    </div>
  );
};

const App = () => {
  const src = "./images/food/food-img.jpg";
  return (
    <Suspense fallback={<Loading />}>
      <AppToRender src={src} />
    </Suspense>
  );
};

export default App;
