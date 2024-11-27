import { motion } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Loading: React.FC = () => {
  // Variants for bouncing animation
  const bounceVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-primary text-white">
      {/* Icons */}

      <motion.div
        className="flex space-x-4"
        variants={bounceVariants}
        animate="animate"
      >
        <i className="fas fa-coffee text-3xl text-white"></i>
        <i className="fas fa-utensils text-3xl text-secondary"></i>
        <i className="fas fa-ice-cream text-3xl text-white"></i>
      </motion.div>

      {/* Loading Text */}
      <motion.p
        className="mt-6 text-xl text-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
      >
        Loading...
      </motion.p>
    </div>
  );
};

export default Loading;
